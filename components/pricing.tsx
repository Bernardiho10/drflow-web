import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
                    <p>Start a free, fully functional 14-day trial (no credit card required).
Once you decide to sign up, our pricing is extremely affordable and delivers incredible value.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Starter Plan</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$10 / mo</span>
                            <CardDescription className="text-sm">Everything you need to get your practice off the ground!</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['1 Practitioner','1000 Appointments Limit', '1 User', 'Unlimited Clients', 'Free and Paid Telehealth Options', '100GB File storage', 'Automatic Appointment Reminders', 'Paperless Intake Forms', 'Integrated Billing', 'Client Booking Portal', 'Basic Data Import', 'Chat or Email Support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="">Try For Free</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Popular</span>

                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Growth Solo Plan</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">$19 / mo</span>
                                <CardDescription className="text-sm">Power up your established practice with automations and scope to expand!</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {['1 Practitioner','Unlimited Appointments', 'Unlimited Users', 'Client Booking Portal', 'Unlimited File Storage', 'Practitioner Scheduling', 'Advanced Waitlist', 'Customizable Note Templates', 'Practice Operations Manual', 'Multiple Locations', 'Room and Resource Management', 'Comprehensive Data Import', 'Chat, Email or Video Support'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="">Try For Free</Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Growth Group Plan</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$29 / mo</span>
                            <CardDescription className="text-sm">Powerful features for growing health clinics.
Take your practice to the next level!</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Up to 6 Practitioner','Unlimited Appointments','Client Booking Portal', 'Unlimited Users', 'Unlimited Clients', 'Unlimited File Storage', 'Practitioner Scheduling', 'Advanced Waitlist', 'Customizable Note Templates', 'Practice Operations Manual', 'Multiple Locations', 'Room and Resource Management', 'Comprehensive Data Import', 'Chat, Email or Video Support', 'Comprehensive Report'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="">Try For Free</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
