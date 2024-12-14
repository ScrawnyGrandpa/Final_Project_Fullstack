import React, { useEffect, useState } from 'react';
import { useAuthentication } from '../../providers/AuthenticationProvider';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router';
import BossSection from './BossSection';
import DungeonSection from './DungeonSection';
import { usePageUI } from '../../providers/PageUIProvider';
import BossModel from '../../models/BossModel';
import DungeonModel from '../../models/DungeonModel';

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

    useEffect(() => {
        if (user) setLoading(false);
    }, [user]);

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

        return true; // Everything is valid
    };

    const handleDeleteEntity = async (id, model, entityName) => {
        const isValid = await validateAndCheckId(id, model, entityName);
        if (!isValid) return;

        try {
            const entity = await model.load(id);
            await entity.delete();
            handleNotification(`${entityName} deleted successfully!`, "success");
            console.log(`Deleted ${entityName}:`, entity);
        } catch (error) {
            handleNotification(`An error occurred while trying to delete the ${entityName}.`);
            console.error(`Delete Error:`, error);
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

    if (!user) navigate(`${ROUTES.ROOT}`);

    return (
        !loading && user.isAdmin && (
            <div className="flex flex-col">
                <div>Welcome to your Control Center <span className='text-cyan-400'>{user.nickName}</span></div>
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
                <div>
                    <h3 className='mb-2 font-bold text-purple-500'>Quick Admin-Panel Tutorial</h3>
                    <p>In order to edit or delete a boss or a dungeon you must first provide a valid ID for the item you wish to affect. You can do so by either checking the objectID in your MongoDB Compass database - under the name scrawnyGrandpaGuides, and find the item within the requested collection. Or by going to the boss / dungeon URL and copying the ID from the URL line itself. See images below for reference.</p>
                    <br />
                    <p className='mb-3'>MongoDB Compass</p>
                    <img className="border border-[#212930]" src="/assets/mongoDBCompassID.png" alt="MongoDB Compass objectID" />
                    <br />
                    <p className='mb-3'>Boss/Dungeon URL ID</p>
                    <img className="border border-[#212930]" src="/assets/URLID.png" alt="URL ID" />
                </div>
            </div>
        )
    );
}
