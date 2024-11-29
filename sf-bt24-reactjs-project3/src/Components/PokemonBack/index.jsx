import './index.css'

export default function PokemonBack ({stats}){
    return (
        <div className="card-back">
            <ul>
            {stats.map(({ stat , base_stat }) => (
                <li key={stat.name} className="stat">
                <span className="stat-label">{stat.name}</span>
                <div className="progress-bar-container">
                    <div
                    className="progress-bar"
                    style={{ width: `${Math.min(base_stat, 100)}%` }}
                    ></div>
                </div>
                <span>{base_stat}</span>
                </li>
            ))}
            </ul>
       </div>
    )
}