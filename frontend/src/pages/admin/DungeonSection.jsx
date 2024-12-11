import React from 'react';
import InputButton from './InputButton';

export default function DungeonSection({
    editDungeon, setEditDungeon,
    deleteDungeon, setDeleteDungeon,
    handleCreateDungeon, handleEditDungeon, handleEditDungeonStrategy, handleDeleteDungeon
}) {
    return (
        <div className="my-10 text-left flex flex-col">
            <div className="flex items-center mb-3">
                <button className="bg-blue-500 text-white text-sm px-3 py-1 mx-2 rounded hover:bg-purple-600 my-2" onClick={handleCreateDungeon}>
                    Create Dungeon
                </button>
            </div>

            <InputButton
                label="Edit Dungeon Info"
                inputValue={editDungeon}
                setInputValue={setEditDungeon}
                buttonLabel="Edit Dungeon Info"
                handleButtonClick={handleEditDungeon}
                placeholder="Dungeon ID"
            />

            <InputButton
                label="Delete Dungeon"
                inputValue={deleteDungeon}
                setInputValue={setDeleteDungeon}
                buttonLabel="Delete Dungeon"
                handleButtonClick={handleDeleteDungeon}
                placeholder="Dungeon ID"
            />
        </div>
    );
}
