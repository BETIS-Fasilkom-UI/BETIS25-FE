

export function BigCircleIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="70" height="75" viewBox="0 0 70 75" fill="none">
            <ellipse cx="35" cy="37.5" rx="35" ry="37.5" fill="#D9D9D9" />
        </svg>
    )
}


export function SmallCircleIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
            <ellipse cx="10" cy="10.7143" rx="10" ry="10.7143" fill="#D9D9D9" />
        </svg>
    )
}