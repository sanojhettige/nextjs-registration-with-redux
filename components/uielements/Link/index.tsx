
import Link from 'next/link'

interface Props {
    children: React.ReactNode,
    to: string,
    className?: string
}
export default ({ children, to, className }: Props) => {
    return <Link href={to}><a className={`${className}`}>{children}</a></Link>
}