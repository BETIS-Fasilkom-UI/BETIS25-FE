import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, UserJWT } from "@/hooks/interface"

export const ProfilePageModule = ({ user }: {
    user: User
}) => {
    return (
        <main className="p-10 mt-40 ">
            <section className="shadow-md rounded-lg p-6 ">
                <Avatar className="w-40 h-40 mb-10">
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>
                        {user.fullname[0].toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Nama Lengkap</h3>
                    <p className="text-white/80">{user.fullname}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Nama Panggilan</h3>
                    <p className="text-white/80">{user.nickname}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-white/80">{user.email}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Nomor Telepon</h3>
                    <p className="text-white/80">{user.phoneNumber}</p>
                </div>
            </section>
        </main>
    )
}