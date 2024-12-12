import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLoadEffect, usePageUI } from '../../providers/PageUIProvider';
import BossModel from '../../models/BossModel';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { SPELL, NPC } from "../../utils/wowheadLinks";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import GuideForm from '../../components/Form/GuideForm';
import { useAuthentication } from '../../providers/AuthenticationProvider';
import { ROUTES } from '../../router';
import { useSearch } from "../../providers/SearchProvider";

export default function BossGuide() {
    const [boss, setBoss] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { user } = useAuthentication();
    const { setNotification } = usePageUI();
    const [orderedNormalPhases, setOrderedNormalPhases] = useState([]);
    const [orderedHeroicPhases, setOrderedHeroicPhases] = useState([]);
    const navigate = useNavigate();
    const [newAddition, setNewAddition] = useState(false);
    const { setShowSearch } = useSearch();

    useLoadEffect(async () => {
        const boss = await BossModel.load(id);
        setBoss(boss);
    }, [id]);

    useEffect(() => {
        if (boss) {
            setOrderedNormalPhases(boss.guide.normal || []);
            setOrderedHeroicPhases(boss.guide.heroic || []);
        }
        setLoading(false);
    }, [boss]);

    useEffect(() => {
        if (boss) {
            WH.Tooltips.refreshLinks();
        }
        setLoading(false);
    }, [boss]);

    const handleDragEnd = (result, type) => {
        const { destination, source } = result;
        if (!destination) return;

        const reorder = (list, startIndex, endIndex) => {
            const [removed] = list.splice(startIndex, 1);
            list.splice(endIndex, 0, removed);
            return [...list];
        };

        let updatedPhases;
        if (type === "normal") {
            updatedPhases = reorder(orderedNormalPhases, source.index, destination.index);
            setOrderedNormalPhases(updatedPhases);
        } else if (type === "heroic") {
            updatedPhases = reorder(orderedHeroicPhases, source.index, destination.index);
            setOrderedHeroicPhases(updatedPhases);
        }
    };

    const submitGuide = async () => {
        const updatedBoss = new BossModel({
            ...boss,
            guide: { normal: orderedNormalPhases, heroic: orderedHeroicPhases }
        });
        await updatedBoss.save();
        setNotification({ message: "Boss guide updated", severity: "success" });
        setNewAddition(true);
    };

    useEffect(() => {
        setShowSearch(false);
    }, []);

    if (loading || !boss) return <div>Loading...</div>;

    if (!user || !user.isAdmin) {
        return navigate(`${ROUTES.BOSS_INFO}/${boss._id}`);
    }

    return (
        user.isAdmin && (<div className="container mx-auto px-4 max-w-4xl bg-[#202020] rounded-sm min-w-[70vw]">
            <GuideForm boss={boss} initialGuide={boss.guide} submitGuide={submitGuide} />
            <div className="mx-3">
                <h3 className="text-cyan-300 text-xl font-bold mb-4">Normal Phases</h3>

                <DragDropContext onDragEnd={(result) => handleDragEnd(result, "normal")}>
                    <Droppable droppableId="normal-phases">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {orderedNormalPhases.map((phaseInfo, index) => (
                                    <Draggable key={index} draggableId={`normal-${index}`} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="mb-4 p-4"
                                            >
                                                <h2 className="text-cyan-200 text-2xl font-bold mb-4">{phaseInfo.phase}:</h2>
                                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                                    {phaseInfo.description
                                                        .replace(/\[(\d+)\]/g, (match, skillId) => {
                                                            return `<a href="${SPELL}${skillId}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">${skillId}</a>`;
                                                        })
                                                        .replace(/{(\d+)}/g, (match, npcId) => {
                                                            return `<a href="${NPC}${npcId}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">${npcId}</a>`;
                                                        })
                                                        .replace(/\n/g, '<br />')}
                                                </ReactMarkdown>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                <h3 className="text-cyan-300 text-xl font-bold mb-4">Heroic Phases</h3>
                <DragDropContext onDragEnd={(result) => handleDragEnd(result, "heroic")}>
                    <Droppable droppableId="heroic-phases">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {orderedHeroicPhases.map((heroicPhase, heroicIndex) => (
                                    <Draggable key={heroicIndex} draggableId={`heroic-${heroicIndex}`} index={heroicIndex}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="mb-4 p-4 bg-[#lalala]"
                                            >
                                                <h4 className="text-cyan-200 font-semibold">{heroicPhase.phase}:</h4>
                                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                                    {heroicPhase.description
                                                        .replace(/\[(\d+)\]/g, (match, skillId) => {
                                                            return `<a href="${SPELL}${skillId}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">${skillId}</a>`;
                                                        })
                                                        .replace(/{(\d+)}/g, (match, npcId) => {
                                                            return `<a href="${NPC}${npcId}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">${npcId}</a>`;
                                                        })
                                                        .replace(/\n/g, '<br />')}
                                                </ReactMarkdown>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                <button onClick={submitGuide} className="my-10 bg-blue-500 text-white py-2 px-6 rounded">
                    Save Guide
                </button>
            </div>
        </div>)
    );
}
