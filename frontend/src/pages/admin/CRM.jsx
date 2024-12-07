import React, { useEffect, useState } from 'react';
import { useAuthentication } from '../../providers/AuthenticationProvider';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router';
import BossSection from './BossSection';
import DungeonSection from './DungeonSection';

export default function CRM() {
    const { user } = useAuthentication();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [editBoss, setEditBoss] = useState('');
    const [editStrategy, setEditStrategy] = useState('');
    const [deleteBoss, setDeleteBoss] = useState('');
    const [editDungeon, setEditDungeon] = useState('');
    const [editDungeonStrategy, setEditDungeonStrategy] = useState('');
    const [deleteDungeon, setDeleteDungeon] = useState('');

    useEffect(() => {
        if (user) setLoading(false);
    }, [user]);

    // Boss
    const handleCreateBoss = () => navigate(`${ROUTES.BOSS_CREATE}`);
    const handleEditBoss = () => {
        try {
            if (!editBoss.trim()) {
                alert("Please provide a valid boss ID.");
                return;
            }
            navigate(`${ROUTES.BOSS_FORM}/${editBoss}`);
        } catch (error) {
            alert("An error occurred while trying to edit the boss.");
        }
    };

    const handleEditStrategy = () => {
        try {
            if (!editStrategy.trim()) {
                alert("Please provide a valid strategy ID.");
                return;
            }
            navigate(`${ROUTES.BOSS_GUIDE}/${editStrategy}`);
        } catch (error) {
            alert("An error occurred while trying to edit the boss strategy.");
        }
    };

    const handleDeleteBoss = async () => {
        try {
            if (!deleteBoss.trim()) {
                alert("Please provide a valid boss ID to delete.");
                return;
            }

            // Delete logic here

        } catch (error) {
            alert("An error occurred while trying to delete the boss.");
        }
    };

    // Dungeon
    const handleCreateDungeon = () => navigate(`${ROUTES.DUNGEON_CREATE}`);
    const handleEditDungeon = () => {
        try {
            if (!editDungeon.trim()) {
                alert("Please provide a valid dungeon ID.");
                return;
            }
            navigate(`${ROUTES.DUNGEON_FORM}/${editDungeon}`);
        } catch (error) {
            alert("An error occurred while trying to edit the dungeon.");
        }
    };

    const handleEditDungeonStrategy = () => {
        try {
            if (!editDungeonStrategy.trim()) {
                alert("Please provide a valid dungeon strategy ID.");
                return;
            }
            navigate(`${ROUTES.DUNGEON_GUIDE}/${editDungeonStrategy}`);
        } catch (error) {
            alert("An error occurred while trying to edit the dungeon strategy.");
        }
    };

    const handleDeleteDungeon = async () => {
        try {
            if (!deleteDungeon.trim()) {
                alert("Please provide a valid dungeon ID to delete.");
                return;
            }
            console.log("Deleting dungeon", deleteDungeon);
        } catch (error) {
            alert("An error occurred while trying to delete the dungeon.");
        }
    };

    if (!user) navigate(`${ROUTES.ROOT}`);

    return (
        !loading && user.isAdmin && (
            <div className="flex flex-col">
                <div>Welcome to your Control Center {user.nickName}</div>

                {/* Boss Section */}
                <BossSection
                    editBoss={editBoss} setEditBoss={setEditBoss}
                    editStrategy={editStrategy} setEditStrategy={setEditStrategy}
                    deleteBoss={deleteBoss} setDeleteBoss={setDeleteBoss}
                    handleCreateBoss={handleCreateBoss} handleEditBoss={handleEditBoss}
                    handleEditStrategy={handleEditStrategy} handleDeleteBoss={handleDeleteBoss}
                />

                {/* Dungeon Section */}
                <DungeonSection
                    editDungeon={editDungeon} setEditDungeon={setEditDungeon}
                    editDungeonStrategy={editDungeonStrategy} setEditDungeonStrategy={setEditDungeonStrategy}
                    deleteDungeon={deleteDungeon} setDeleteDungeon={setDeleteDungeon}
                    handleCreateDungeon={handleCreateDungeon} handleEditDungeon={handleEditDungeon}
                    handleEditDungeonStrategy={handleEditDungeonStrategy} handleDeleteDungeon={handleDeleteDungeon}
                />
            </div>
        )
    );
}
