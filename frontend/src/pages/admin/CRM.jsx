import React, { useEffect, useState } from 'react';
import { useAuthentication } from '../../providers/AuthenticationProvider';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router';
import BossSection from './BossSection';
import DungeonSection from './DungeonSection';
import { usePageUI } from '../../providers/PageUIProvider';
import BossModel from '../../models/BossModel';
import DungeonModel from '../../models/DungeonModel';
import { useSearch } from '../../providers/SearchProvider';

export default function CRM() {
    const { user } = useAuthentication();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { setNotification } = usePageUI();
    const [editBoss, setEditBoss] = useState('');
    const [editStrategy, setEditStrategy] = useState('');
    const [deleteBoss, setDeleteBoss] = useState('');
    const [editDungeon, setEditDungeon] = useState('');
    const [deleteDungeon, setDeleteDungeon] = useState('');
    const { setShowSearch } = useSearch();

    useEffect(() => {
        if (user) setLoading(false);
    }, [user]);

    useEffect(() => {
        setShowSearch(false);
    }, []);

    const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);

    const handleNotification = (message, severity = "error") => {
        setNotification({ message, severity });
    };

    const checkIfIdExists = async (id, model) => {
        try {
            const response = await model.load(id);
            return response ? response : null;
        } catch (error) {
            console.error(`Error checking if ${model.modelName} ID exists:`, error);
            return null;
        }
    };

    const validateAndCheckId = async (id, model, entityName) => {
        if (!id.trim()) {
            handleNotification(`Please provide a valid ${entityName} ID.`);
            return false;
        }

        if (!isValidObjectId(id)) {
            handleNotification(`Invalid ${entityName} ID format.`);
            return false;
        }

        const exists = await checkIfIdExists(id, model);
        if (!exists) {
            handleNotification(`${entityName} ID does not exist.`);
            return false;
        }
        return true;
    };

    const handleDeleteEntity = async (id, model, entityName) => {
        const isValid = await validateAndCheckId(id, model, entityName);
        if (!isValid) return;

        try {
            const entity = await model.load(id);
            await entity.delete();
            handleNotification(`${entityName} deleted successfully!`, "success");
        } catch (error) {
            handleNotification(`An error occurred while trying to delete the ${entityName}.`);
        }
    };

    // Boss
    const handleCreateBoss = () => navigate(`${ROUTES.BOSS_CREATE}`);

    const handleEditBoss = async () => {
        const isValid = await validateAndCheckId(editBoss, BossModel, "Boss");
        if (isValid) navigate(`${ROUTES.BOSS_FORM}/${editBoss}`);
    };

    const handleEditStrategy = async () => {
        const isValid = await validateAndCheckId(editStrategy, BossModel, "Strategy");
        if (isValid) navigate(`${ROUTES.BOSS_GUIDE}/${editStrategy}`);
    };

    const handleDeleteBoss = () => handleDeleteEntity(deleteBoss, BossModel, "Boss");

    // Dungeon
    const handleCreateDungeon = () => navigate(`${ROUTES.DUNGEON_CREATE}`);

    const handleEditDungeon = async () => {
        const isValid = await validateAndCheckId(editDungeon, DungeonModel, "Dungeon");
        if (isValid) navigate(`${ROUTES.DUNGEON_FORM}/${editDungeon}`);
    };

    const handleDeleteDungeon = () => handleDeleteEntity(deleteDungeon, DungeonModel, "Dungeon");
    const toTutorial = () => { navigate(`${ROUTES.CRM_TUTORIAL}`) };

    if (!user) navigate(`${ROUTES.ROOT}`);

    return (
        !loading && user.isAdmin && (
            <div className="flex flex-col">
                <div>Welcome to your Control Center <span className='text-cyan-400'>{user.nickName}</span></div>
                <button className="bg-purple-700 max-w-[20%] text-white text-sm px-3 py-1 mx-2 rounded-sm hover:bg-purple-600 my-2" onClick={toTutorial}>How to use this page?</button>
                {/* Boss */}
                <BossSection
                    editBoss={editBoss} setEditBoss={setEditBoss}
                    editStrategy={editStrategy} setEditStrategy={setEditStrategy}
                    deleteBoss={deleteBoss} setDeleteBoss={setDeleteBoss}
                    handleCreateBoss={handleCreateBoss} handleEditBoss={handleEditBoss}
                    handleEditStrategy={handleEditStrategy} handleDeleteBoss={handleDeleteBoss}
                />
                {/* Dungeon */}
                <DungeonSection
                    editDungeon={editDungeon} setEditDungeon={setEditDungeon}
                    deleteDungeon={deleteDungeon} setDeleteDungeon={setDeleteDungeon}
                    handleCreateDungeon={handleCreateDungeon} handleEditDungeon={handleEditDungeon}
                    handleDeleteDungeon={handleDeleteDungeon}
                />
            </div>
        )
    );
}
