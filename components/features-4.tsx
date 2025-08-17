import { CalendarCheck, HatGlasses, MessageCircleMore, ClipboardCheck, Infinity, CreditCard } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Focus on Providing Quality Care, We’ve Got the Rest</h2>
                    <p> Drflow is an all-in-one practice management software that makes running a practice easy and enjoyable. With tools for everything from communication to billing, top-tier data security, and dedicated support, our platform is designed to take the busy work off your plate. </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <MessageCircleMore className="size-6" />
                            <h3 className="text-sm font-medium">Improve Staff Communication</h3>
                        </div>
                        <p className="text-sm">SMS and Email Appointment Reminder Software
Keep clients informed with the SMS and email communication features in your practice management software (PMS).</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <CalendarCheck className="size-6" />
                            <h3 className="text-sm font-medium">Fill Schedule Gaps</h3>
                        </div>
                        <p className="text-sm">Built for busy clinics, Drflow simplifies appointment scheduling for allied health professionals. Easily manage your calendar, maintain HIPAA-compliance, and deliver quality care on your terms.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <HatGlasses className="size-6" />

                            <h3 className="text-sm font-medium">Protect Patient Privacy</h3>
                        </div>
                        <p className="text-sm">Healthcare data security is a critical priority for us, and security permeates everything we do, so you can focus on what matters most.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <ClipboardCheck className="size-6" />

                            <h3 className="text-sm font-medium">Streamline Daily Tasks</h3>
                        </div>
                        <p className="text-sm">Simplify new client onboarding. Our practice management software with intake forms gives you a smarter way to gather, organize, and store client information—making online patient intake easier for everyone.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Infinity className="size-8" />

                            <h3 className="text-sm font-medium">Experience Unlimited Scalability</h3>
                        </div>
                        <p className="text-sm">Rely on an integrated practice management system to manage bookings, invoices, and payments—without bouncing between tools.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <CreditCard className="size-8" />

                            <h3 className="text-sm font-medium">Payment Processing and Invoicing for Healthcare</h3>
                        </div>
                        <p className="text-sm">Simplify scheduling and invoicing together in your practice management system. Drflow helps you stay organized, get paid faster, and reduce admin.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
