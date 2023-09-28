import {CheckCircleIcon, InformationCircleIcon} from '@heroicons/react/20/solid'
import '../../app/globals.css'
import Header from "@/pages/website/components/Header";
import Footer from "@/pages/website/components/Footer";
import WebsiteLayout from "@/pages/website/layout";

export default function PrivacyPage() {
  return (
    <WebsiteLayout>
      <Header/>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-indigo-600">Privacy Policy</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Privacy is our #1
            concern</h1>
          <p className="mt-6 text-xl leading-8">
            We respect your privacy and are committed to protecting it through our
            compliance with this policy.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              We collect several types of information from and about users of our App:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>
                <span>
                <strong className="font-semibold text-gray-900">User-provided Information.</strong> This includes any information you provide to us directly, such as user names or contact details if applicable.
              </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true"/>
                <span>
                <strong className="font-semibold text-gray-900">Usage Data.</strong> We may collect data about how you use the App and which features you utilize.
              </span>
              </li>
            </ul>
            <p className="mt-8">
              We use the information that we collect about you or that you provide to us:

              To present our App and its contents to you.
              To provide you with support and improve the functionality of the App.
              For any other purpose with your consent.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Disclosure of Your Information</h2>
            <p className="mt-6">
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information
              unless we provide you with advance notice.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Data Security</h2>
            <p className="mt-6">
              We implement a variety of security measures to maintain the safety of your personal information. However,
              the transmission of information via the internet and mobile platforms is not completely secure. We cannot
              guarantee the security of your personal information when transmitted through our App or our servers.
            </p>


            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900"> Changes to Our Privacy Policy</h2>
            <p className="mt-6">
              It is our policy to post any changes we make to our privacy policy on this page. The date the privacy
              policy
              was last revised is identified at the top of the page.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    </WebsiteLayout>
  )
}
