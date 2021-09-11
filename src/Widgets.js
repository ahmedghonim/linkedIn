import { FiberManualRecord, InfoSharp } from '@material-ui/icons'
import React from 'react'
import './Widgets.scss'
function Widgets() {
    const newArticle = (heading, subtitles) => {
        return (
            <div className='widgets__article'>
                <div className="widgets__articleLeft">
                    <FiberManualRecord />
                </div>
                <div className="widgets__articleRight">
                    <h2>{heading}</h2>
                    <p>{subtitles}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn news</h2>
                <InfoSharp />
            </div>
                <div>
                    {newArticle('ahmed', 'edr ytkhta kil al 3wa2ek')}
                    {newArticle('ahmed', 'edr ytkhta kil al 3wa2ek')}
                   
                </div>
        </div>
    )
}

export default Widgets
