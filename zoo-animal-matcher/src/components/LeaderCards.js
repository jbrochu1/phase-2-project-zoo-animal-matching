
export default function LeaderCards({game}) {
    const { name, totalAttempts, matchCount } = game; 

    return (
        // <div>
            <tr>
                <td className="border border-slate-300">{name}</td>
                <td className="border border-slate-300">{matchCount}</td>
                <td className="border border-slate-300">{totalAttempts}</td>
            </tr>
        // </div>
    )
}