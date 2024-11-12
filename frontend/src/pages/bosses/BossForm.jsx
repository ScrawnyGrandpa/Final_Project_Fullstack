import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useLoadCallback, useLoadEffect } from "../../providers/PageUIProvider";
import { ROUTES } from "../../router";
import PageContent from "../../components/layout/PageContent";
import BossModel from "../../models/BossModel";
import BossSchema from "../../schema/BossSchema";
import Form from "../../components/Form/Form"; // Using the new Form component

export default function BossForm() {
    const [boss, setBoss] = useState(null);
    const [defaultValue, setDefaultValue] = useState({});
    const [initialData, setInitialData] = useState(null);
    const { id } = useParams();
    const schema = useMemo(() => new BossSchema(), []);
    const navigate = useNavigate();

    const onBossLoaded = useCallback(async () => {
        const data = id ? await BossModel.load(id) : new BossModel();
        setBoss(data);
        setDefaultValue(data);
        setInitialData(data);
    }, [id]);

    const handleFormChange = (data, isValid) => {
        console.log("Form valid?", isValid);
        setDefaultValue(data);
    };

    const handleReset = () => {
        console.log('Resetting form');
        setDefaultValue(initialData);
    };

    const onSubmit = useLoadCallback(async (data) => {
        console.log("Submitting form with data", data);
        setDefaultValue(data);

        const completeData = { ...data };

        const updatedBoss = new BossModel(completeData);
        console.log("boss complete data", completeData);

        await updatedBoss.save();
        navigate(`${ROUTES.BOSS_INFO}/${updatedBoss._id}`);
    }, [id, boss]);

    useLoadEffect(onBossLoaded, [id]);

    return (
        <PageContent>
            {boss ? (
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
                                onCancel={() => navigate(`${ROUTES.BOSS_INFO}/${boss._id}`)}
                                onSubmit={onSubmit}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <Navigate to={ROUTES.ROOT} replace />
            )}
        </PageContent>
    );
}
