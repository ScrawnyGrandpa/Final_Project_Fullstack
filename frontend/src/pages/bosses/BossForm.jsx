import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLoadCallback, useLoadEffect, usePageUI } from "../../providers/PageUIProvider";
import { ROUTES } from "../../router";
import BossModel from "../../models/BossModel";
import BossSchema from "../../schema/BossSchema";
import Form from "../../components/Form/Form";
import PageContent from "../../components/layout/PageContent";
import { useSearch } from "../../providers/SearchProvider";

export default function BossForm() {
    const [boss, setBoss] = useState(null);
    const [defaultValue, setDefaultValue] = useState({});
    const [initialData, setInitialData] = useState(null);
    const { id } = useParams();
    const { setNotification } = usePageUI();
    const schema = useMemo(() => new BossSchema(), []);
    const navigate = useNavigate();
    const { setShowSearch } = useSearch();

    const onBossLoaded = useCallback(async () => {
        const data = id ? await BossModel.load(id) : new BossModel();
        setBoss(data);
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

        const updatedBoss = new BossModel(completeData);
        await updatedBoss.save();
        setNotification({ message: "Boss profile updated", severity: "success" });

        navigate(`${ROUTES.BOSS_INFO}/${updatedBoss._id}`);
    }, [id, boss]);

    useLoadEffect(onBossLoaded, [id]);

    const goBack = () => {
        boss._id ?
            navigate(`${ROUTES.BOSS_INFO}/${boss._id}`) :
            navigate(`${ROUTES.ROOT}`)
    }

    useEffect(() => {
        setShowSearch(false);
    }, []);

    return (
        <PageContent>
            {boss ? (
                <div className="max-w-3xl mx-auto p-5 md:w-[95vw]">
                    <h1 className="text-2xl font-bold mb-4 flex justify-between items-center">
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
                    </h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex-1">
                            {/* Form Component */}
                            <Form
                                title={`${id ? "Edit" : "Create"} Boss`}
                                schema={schema}
                                defaultValue={defaultValue}
                                onReset={handleReset}
                                onCancel={() => navigate(`${ROUTES.BOSS_INFO}/${boss._id}`)}
                                onSubmit={onSubmit}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="max-w-3xl mx-auto p-5 md:w-[95vw]">
                    <h1 className="text-left text-2xl font-bold mb-5">Boss Page</h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex-1">
                            {/* Form Component */}
                            <Form
                                title={`${id ? "Edit" : "Create"} Boss`}
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
                /*<Navigate to={ROUTES.ROOT} replace />*/
            )}
        </PageContent>
    );
}
