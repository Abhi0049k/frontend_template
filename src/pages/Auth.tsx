import { FC, useEffect } from "react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";

const Auth: FC<{ action: string }> = ({ action }) => {
    useEffect(() => {
        document.title = action === "register" ? "Register | LNT_Now" : "Login | LNT_Now";
    }, [action])

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{action === "register" ? "Register" : "Login"}</CardTitle>
                    <CardDescription>{action === "login" ? "Login to create or join any meet." : "Register to video call your friends and family."}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>

                        <div className="grid w-full items-center gap-4">
                            {
                                action === "register" ? (
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Name</Label>
                                        <Input type="text" id="name" placeholder="Name" />
                                    </div>
                                ) : null
                            }
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="Password" />
                            </div>
                        </div>
                        {
                            <Button className="my-4">{action === "register" ? "Register" : "Login"}</Button>
                        }
                    </form>
                </CardContent>
                <CardFooter className="text-center text mt-[-32px]">
                    {action === "register" ? "Already have an account?" : "Don't have an account?"}
                    <Link to={action === "register" ? "/Login" : "/register"} className="ml-1 text-blue-500">{action === "register" ? "Login" : "Register"}</Link>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Auth