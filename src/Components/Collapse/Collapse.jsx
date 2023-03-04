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
            <div
                className={isOpen ? 'collapseContent' : 'collapseContentHidden'}
            >
                {Array.isArray(content) ? (
                    content.map((item, index) => {
                        return <p key={index} className={
                            isOpen ? 'collapseContentList' : 'collapseContentHidden'
                        }>{item}</p>
                    })
                ) : (
                    <p
                        className={
                            isOpen ? 'collapseContent' : 'collapseContentHidden'
                        }
                    >
                        {content}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Aboutcollapse

// const typeContent = content
// // console.log(typeof typeContent);

// // const myContent = () => {
// //     if (typeof { content } === 'array') {
// //         ;<ul
// //             className={isOpen ? 'collapseContent' : 'collapseContentHidden'}
// //         >
// //             {content.map((item, index) => {
// //                 ;<li key={index}>{item}</li>
// //             })}
// //         </ul>
// //     }
// //     // else if (typeof { content } === 'string') {
// //     //     ;<p
// //     //         className={isOpen ? 'collapseContent' : 'collapseContentHidden'}
// //     //     >
// //     //         {content}
// //     //     </p>
// //     // }
// // }
