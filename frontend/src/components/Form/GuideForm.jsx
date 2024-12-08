import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoadCallback } from "../../providers/PageUIProvider";
import BossModel from "../../models/BossModel";
import { ROUTES } from "../../router";

export default function GuideForm({ boss, initialGuide }) {
    const [guide, setGuide] = useState(initialGuide || { normal: [], heroic: [] });
    const [initialBossData, setInitialBossData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setGuide(initialGuide || { normal: [], heroic: [] });
        setInitialBossData(boss);
    }, [initialGuide]);

    const handlePhaseChange = (type, index, field, value) => {
        const newGuide = { ...guide };
        newGuide[type][index][field] = value;
        setGuide(newGuide);
    };

    const addPhase = (type) => {
        const newGuide = { ...guide };
        newGuide[type].push({ phase: "", description: "" });
        setGuide(newGuide);
    };

    const removePhase = (type, index) => {
        const newGuide = { ...guide };
        newGuide[type].splice(index, 1);
        setGuide(newGuide);
    };

    const handleReset = () => {
        setGuide({ normal: [{ phase: "", description: "" }], heroic: [{ phase: "", description: "" }] });
    };

    const goBack = () => {
        navigate(`${ROUTES.BOSS_INFO}/${boss._id}`);
    }

    const onSubmit = useLoadCallback(async () => {
        const guideData = guide;
        const completeData = { ...initialBossData, guideData };
        const updatedBoss = new BossModel(completeData);
        console.log("Submitting form with guide data", completeData);


        await updatedBoss.save();
    }, [guide, boss]);

    return (
        <div className="max-w-4xl mx-auto p-6 text-white">
            <h2 className="text-2xl font-bold mb-4 flex justify-between items-center">
                {boss.name}
                <div className="text-right">
                    <button
                        type="button"
                        onClick={goBack}
                        className="bg-gray-800 text-white text-sm px-3 py-1 mx-2 rounded hover:bg-blue-600"
                    >
                        Back
                    </button>
                </div>
            </h2>


            {/* Normal Mode Guide */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Normal Mode Guide:</label>
                {guide.normal.map((phase, index) => (
                    <div key={`normal-${index}`} className="flex flex-col mb-10 space-y-3">
                        <input
                            type="text"
                            placeholder="Phase Name"
                            value={phase.phase}
                            onChange={(e) => handlePhaseChange("normal", index, "phase", e.target.value)}
                            className="border border-cyan-700 p-2 w-full text-white rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Description"
                            value={phase.description}
                            onChange={(e) => handlePhaseChange("normal", index, "description", e.target.value)}
                            className="border border-cyan-700 p-2 w-full text-white rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                        />
                        <button
                            type="button"
                            onClick={() => removePhase("normal", index)}
                            className="bg-red-800 text-white py-2 px-4 rounded-sm"
                        >
                            Remove Phase
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => addPhase("normal")}
                    className="bg-blue-500 text-white py-2 px-4 rounded-sm"
                >
                    + Add Normal Phase
                </button>
            </div>

            <hr className="my-6 border-t-2 border-gray-600" />

            {/* Heroic Mode Guide */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Heroic Mode Guide:</label>
                {guide.heroic.map((phase, index) => (
                    <div key={`heroic-${index}`} className="flex flex-col mb-4 space-y-3">
                        <input
                            type="text"
                            placeholder="Phase Name"
                            value={phase.phase}
                            onChange={(e) => handlePhaseChange("heroic", index, "phase", e.target.value)}
                            className="border border-cyan-700 p-2 w-full text-white rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Description"
                            value={phase.description}
                            onChange={(e) => handlePhaseChange("heroic", index, "description", e.target.value)}
                            className="border border-cyan-700 p-2 w-full text-white rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                        />
                        <button
                            type="button"
                            onClick={() => removePhase("heroic", index)}
                            className="bg-red-600 text-white py-2 px-4 rounded-sm"
                        >
                            Remove Phase
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => addPhase("heroic")}
                    className="bg-blue-500 text-white py-2 px-4 rounded-sm"
                >
                    + Add Heroic Phase
                </button>
            </div>

            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={onSubmit}
                    className="bg-green-500 text-white py-2 px-6 rounded-sm"
                >
                    Save Guide
                </button>
            </div>
        </div>
    );
}
