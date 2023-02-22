/**Etats open close
 * Utiliser les props pour utliser les données voulu
 */
import '../../Styles/Collapse.css'
import { useState } from 'react'
import DropDownClose from '../../assets/dropdown.svg'

function Aboutcollapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <h2 className="collapseTitle" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img
                    className={isOpen ? 'arrow arrowUp' : 'arrow arrowDown'}
                    src={DropDownClose}
                    alt="montrer le contenu"
                />
            </h2>
            <p className={isOpen ? 'collapseContent' : 'collapseContentHidden'}>{content}</p>
        </div>
    )
}

export default Aboutcollapse
