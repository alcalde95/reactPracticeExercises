import { useState } from "react"

// eslint-disable-next-line react/prop-types
const TwitterFollowCard = ({ children, userName, initialIsFollowing }) => {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? "Siguiendo" : "Seguir"

    const buttonClassName = isFollowing ? 'tw-followCard-btn tw-followCard-btn--following' : 'tw-followCard-btn'
    return (
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img src={`https://unavatar.io/${userName}`} alt="profile" className='tw-followCard-avatar' />

                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <button className={buttonClassName} onClick={() => setIsFollowing(!isFollowing)} >
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </article>
    )
}
export default TwitterFollowCard