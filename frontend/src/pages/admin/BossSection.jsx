import React from 'react';
import InputButton from './InputButton';

export default function BossSection({
    editBoss, setEditBoss,
    editStrategy, setEditStrategy,
    deleteBoss, setDeleteBoss,
    handleCreateBoss, handleEditBoss, handleEditStrategy, handleDeleteBoss
}) {
    return (
        <div className="my-10 text-left flex flex-col">
            <div className="flex items-center mb-3">
                <button className="bg-blue-500 text-white text-sm px-3 py-1 mx-2 rounded-sm hover:bg-purple-600 my-2" onClick={handleCreateBoss}>
                    Create Boss
                </button>
            </div>

            <InputButton
                label="Edit Boss Info"
                inputValue={editBoss}
                setInputValue={setEditBoss}
                buttonLabel="Edit Boss Info"
                handleButtonClick={handleEditBoss}
                placeholder="Boss ID"
            />

            <InputButton
                label="Edit Boss Strategy Guide"
                inputValue={editStrategy}
                setInputValue={setEditStrategy}
                buttonLabel="Edit Boss Strategy Guide"
                handleButtonClick={handleEditStrategy}
                placeholder="Strategy ID"
            />

            <InputButton
                label="Delete Boss"
                inputValue={deleteBoss}
                setInputValue={setDeleteBoss}
                buttonLabel="Delete Boss"
                handleButtonClick={handleDeleteBoss}
                placeholder="Boss ID"
            />
        </div>
    );
}
