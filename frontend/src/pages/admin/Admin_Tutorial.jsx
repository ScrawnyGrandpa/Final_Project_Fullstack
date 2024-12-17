import React, { useEffect, useState } from 'react';
import { imageClassStyle } from '../../utils/tailwindStylesHelper';
import { useAuthentication } from '../../providers/AuthenticationProvider';
import { Navigate } from 'react-router-dom';

export default function Admin_Tutorial() {
    const { user } = useAuthentication();
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setIsLoading(false);
        }
    }, [user]);

    if (loading || !user || !user.isAdmin) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <div>
                <h3 className='mb-2 font-bold text-purple-500'>Fetching ID for the Admin Portal</h3>
                <p className='text-xs text-gray-600 mb-10'>This section is not meant for mobile display</p>
                <p>In order to edit or delete a boss or a dungeon you must first provide a valid ID for the item you wish to affect. You can do so by either checking the objectID in your MongoDB Compass database - under the name scrawnyGrandpaGuides, and find the item within the requested collection. Or by going to the boss / dungeon URL and copying the ID from the URL line itself. See images below for reference.</p>
                <br />
                <p className='mb-3'>MongoDB Compass</p>
                <img className={imageClassStyle} src="/assets/mongoDBCompassID.png" alt="MongoDB Compass objectID" />
                <br />
                <p className='mb-3'>Boss/Dungeon URL ID</p>
                <img className={imageClassStyle} src="/assets/URLID.png" alt="URL ID" />
            </div>

            <div className='mt-14'>
                <h3 className='mb-2 font-bold text-purple-500'>How to fill the forms?</h3>
                <p>Here are the two different kinds of forms you will fill. One to create/edit a Boss and one to create/edit a dungeon.</p>
                <img className={imageClassStyle} src="/assets/bossExample.png" alt="Skill Wowhead ID" />
                <img className={imageClassStyle} src="/assets/dungeonExample.png" alt="Skill Wowhead ID" />
            </div>

            <div className='mt-14'>
                <h3 className='mb-2 font-bold text-purple-500'>Preparing for Boss Strategy Guide writing</h3>
                <p>In order to create or edit an existing Boss strategy guide, please find the boss in question on <a href="https://www.wowhead.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Wowhead</a> as it contains all the information required to do so properly.</p>
                <br />
                <p>Specifically for the guide section you may need to be familiar with the boss itself and its mechanics because every skill and NPC has a designated ID. For example, the boss called <a href="https://www.wowhead.com/npc=201261/kazzara-the-hellforged" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Kazzara, the Hellforged</a>'s ID is in the URL, appearing as the image below:</p>
                <img className={imageClassStyle} src="/assets/bossID.png" alt="Boss Wowhead ID" />
                <p>In the same manner, boss skills will also have IDs and appear as the image below:</p>
                <img className={imageClassStyle} src="/assets/bossSkillID.png" alt="Skill Wowhead ID" />
                <p>Notice the difference in the URL. One says <span className="text-red-500">npc=201261</span> and one says <span className="text-green-600">spell=404743</span>. This distinction is important for our website because when writing a guide, you as the administrator and guide writer need to know the IDs and how to input them into our system. Here is an example:</p>
                <br />
                <p>This is how the guide writing section looks:</p>
                <img className={imageClassStyle} src="/assets/guideWorkspace.png" alt="Strategy Guide Workspace" />
                <p>You as the guide writer need to input the Skill IDs inside "[]" and NPC IDs inside "{ }". Once you are done writing a section of the guide, scroll down the page and hit the Save Guide button to save your progress.</p>
                <br />
                <h3 className='mb-2 font-bold text-cyan-500 mt-5'>But what happens if you do them in the wrong order?</h3>
                <p>Fret not! When you scroll down the same guide page you just saved, you will notice the guide you are writing appears there. That section of the guide has its own save button and is a draggable section. Meaning, simply click and drag the phase you just edited into the place in the guide you want it to appear in and hit save!</p>
                <img className={imageClassStyle} src="/assets/guideDrag.png" alt="Draggable Strategy Guide Workspace" />
                <p>Final note: The strategy guide section is displayed using the ReactMarkdown component, which allows you to render all markdown features supported by the library.</p>
                <br />
                <p>For any questions, please feel free to contact us!</p>
            </div>
        </div>
    );
}
