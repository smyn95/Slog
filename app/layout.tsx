import Recoil from '@component/components/recoil/page'

type layoutProps = {
    children: React.ReactNode
}
export default function RootLayout({ children }: layoutProps) {
    return (
        <html lang="en">
            <body>
                <Recoil>{children}</Recoil>
            </body>
        </html>
    )
}
