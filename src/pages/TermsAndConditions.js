import React from 'react'
import Layout from '../components/Layout'

export const TermsAndConditions = () => {
    return (
        <Layout>
            <div className="grid place-items-center">
                <h1 className='text-4xl md:text-6xl font-bold text-center mb-6 mt-10'>Terms and Conditons</h1>
                <div className="p-10 max-w-7xl bg-white shadow-xl my-10 rounded-md">
                    <div className="grid gap-3">
                        <h2 className="text-xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
                        <p>
                            By accessing and using the "Meals On Wheels" website, you acknowledge and agree to the following terms and conditions. These terms govern your use of the website and any services or information provided through it. If you do not agree to these terms, please refrain from using the website.
                        </p>
                    </div>
                    <div className="grid gap-3">
                        <h2 className="text-xl font-bold mt-8 mb-4">Intellectual Property</h2>
                        <p>
                            All intellectual property rights, including copyrights, trademarks, and any other proprietary rights associated with the "Meals On Wheels" website and its contents, belong to Unity One Solutions or its respective owners. This includes but is not limited to text, graphics, logos, images, audio clips, video clips, and software. You may not use, reproduce, or distribute any materials from the website without obtaining prior written permission from the rightful owner.
                        </p>
                    </div>
                    <div className="grid gap-3">
                        <h2 className="text-xl font-bold mt-8 mb-4">Use of the Website</h2>
                        <p>
                            The "Meals On Wheels" website is intended for informational purposes and to facilitate communication between users and MerryMeal. You agree to use the website in a lawful and responsible manner, refraining from any actions that may cause harm, disruption, or unauthorized access to the website. This includes but is not limited to:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>
                                Not attempting to gain unauthorized access to any part of the website, server, or network.
                            </li>
                            <li>
                                Not engaging in any activity that could damage, disable, or impair the website's functionality or interfere with other users' access and use of the website.
                            </li>
                            <li>
                                Not using the website to distribute or transmit any harmful viruses, malware, or any other malicious code.
                            </li>
                            <li>
                                Not engaging in any activity that violates applicable laws, regulations, or the rights of others.
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-3">
                        <h2 className="text-xl font-bold mt-8 mb-4">Third-Party Links</h2>
                        <p>
                            The "Meals On Wheels" website may contain links to third-party websites that are provided for additional information or convenience. Unity One Solutions and MerryMeal are not responsible for the content, accuracy, or availability of these external websites. You acknowledge and agree that you access these third-party websites at your own risk and that the terms and conditions of those websites will apply to your use of their services.
                        </p>
                    </div>
                    <div className="grid gap-3">
                        <h2 className="text-xl font-bold mt-8 mb-4">Disclaimer of Warranties</h2>
                        <p>
                            The "Meals On Wheels" website is provided on an "as is" and "as available" basis. Unity One Solutions and MerryMeal make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or suitability of the website for any purpose. They do not guarantee that the website will be error-free, secure, or continuously available. You acknowledge and agree that your use of the website is at your own risk.
                        </p>
                    </div>
                    <div className="grid gap-3">
                        <h2 className="text-xl font-bold mt-8 mb-4">Limitation of Liability</h2>
                        <p>
                            In no event shall Unity One Solutions, MerryMeal, or their respective employees, directors, officers, or partners be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the "Meals On Wheels" website or its contents. This includes, but is not limited to, damages for loss of profits, goodwill, data, or other intangible losses, even if advised of the possibility of such damages. Some jurisdictions do not allow the exclusion or limitation of liability for incidental or consequential damages, so the above limitations may not apply to you.
                        </p>
                    </div>
                    <div className="grid gap-3">
                        <h2 className="text-xl font-bold mt-8 mb-4">Modifications to the Terms</h2>
                        <p>
                            Unity One Solutions and MerryMeal reserve the right to modify these terms and conditions at any time without prior notice. Any modifications will be effective immediately upon posting on the website. By continuing to use the website after any modifications, you agree to be bound by the updated terms and conditions. It is your responsibility to review the terms and conditions periodically for any changes.
                        </p>
                    </div>
                    <div className="grid gap-3">
                        <h2 className="text-xl font-bold mt-8 mb-4">Governing Law and Jurisdiction</h2>
                        <p>
                            These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction where Unity One Solutions is based. Any disputes arising from the use of the "Meals On Wheels" website shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
                        </p>
                    </div>
                    <p className='mt-10 mb-4 '>By using the "Meals On Wheels" website, you agree to comply with these terms and conditions. If you have any questions or concerns regarding these terms, please contact Unity One Solutions or MerryMeal for further assistance.</p>
                </div>
            </div>
        </Layout>
    )
}
