import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLoadCallback, useLoadEffect, usePageUI } from "../../providers/PageUIProvider";
import { ROUTES } from "../../router";
import DungeonModel from "../../models/DungeonModel";
import DungeonSchema from "../../schema/DungeonSchema";
import Form from "../../components/Form/Form";
import { useSearch } from "../../providers/SearchProvider";
import Popup from "../../components/helpers/Popup";

export default function DungeonForm() {
    const [dungeon, setDungeon] = useState(null);
    const [defaultValue, setDefaultValue] = useState({});
    const [initialData, setInitialData] = useState(null);
    const { id } = useParams();
    const { setNotification } = usePageUI();
    const schema = useMemo(() => new DungeonSchema(), []);
    const navigate = useNavigate();
    const { setShowSearch } = useSearch();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const imageSrc = "/assets/dungeonExample.png";

    const onDungeonLoaded = useCallback(async () => {
        const data = id ? await DungeonModel.load(id) : new DungeonModel();
        setDungeon(data);
        setDefaultValue(data);
        setInitialData(data);
    }, [id]);

    const handleFormChange = (data, isValid) => {
        setDefaultValue(data);
    };

    const handleReset = () => {
        setDefaultValue(initialData);
    };

    const onSubmit = useLoadCallback(async (data) => {
        setDefaultValue(data);
        const completeData = { ...data };
        const updatedDungeon = new DungeonModel(completeData);
        await updatedDungeon.save();
        setNotification({ message: "Dungeon profile updated", severity: "success" });
        navigate(`${ROUTES.DUNGEON_INFO}/${updatedDungeon._id}`);
    }, [id, dungeon]);

    useLoadEffect(onDungeonLoaded, [id]);

    const goBack = () => {
        dungeon._id ?
            navigate(`${ROUTES.DUNGEON_INFO}/${dungeon._id}`) :
            navigate(`${ROUTES.ROOT}`)
    };

    useEffect(() => {
        setShowSearch(false);
    }, []);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            {dungeon ? (
                <div className="max-w-3xl mx-auto p-5 md:w-[95vw]">
                    <h1 className="text-2xl font-bold mb-4 flex justify-between items-center">
                        {dungeon.name}
                        <div className="text-right">
                            <button
                                type="button"
                                onClick={goBack}
                                className="bg-gray-800 text-white text-sm px-3 py-1 mx-2 rounded hover:bg-blue-600"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={openPopup}
                                className="bg-purple-800 text-white text-sm px-3 py-1 mx-2 rounded hover:bg-purple-900"
                            >
                                Example
                            </button>
                        </div>
                    </h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex-1">
                            <Form
                                key={dungeon._id}
                                title={`${id ? "Edit" : "Create"} Dungeon`}
                                schema={schema}
                                defaultValue={defaultValue}
                                onReset={handleReset}
                                onCancel={() => navigate(`${ROUTES.DUNGEON_INFO}/${dungeon._id}`)}
                                onSubmit={onSubmit}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="max-w-3xl mx-auto p-5 md:w-[95vw]">
                    <h1 className="text-left text-2xl font-bold mb-5">Dungeon Page</h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex-1">
                            <Form
                                title={`${id ? "Edit" : "Create"} Dungeon`}
                                schema={schema}
                                defaultValue={defaultValue}
                                onReset={handleReset}
                                onCancel={() => navigate(`${ROUTES.ROOT}`)}
                                onSubmit={onSubmit}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                </div>
            )}
            <Popup isOpen={isPopupOpen} closePopup={closePopup} imageSrc={imageSrc} />
        </>
    );
}
