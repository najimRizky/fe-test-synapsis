import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-body-bg text-center">
      <div className="container pt-8">
        <div className="grid gap-y-6">
          <div>
            <div className="text-3xl font-bold  leading-none">
              S-BLOG
            </div>
            <div className="text-xs">
              Synapsis Blog
            </div>
          </div>
          <p className="text-sm">
            This project is solely intended for testing purposes. Its primary objective is to assess various aspects of functionality, performance, and compatibility. The project does not have any real-world application or commercial use. Instead, it serves as a controlled environment for experimentation and validation of concepts, software, or hardware components. Test data and scenarios are meticulously designed to help identify potential issues, refine algorithms, and optimize systems. Any results or findings generated from this project should not be interpreted as indicative of practical utility, as its sole purpose is to facilitate experimentation and testing in a controlled setting.
          </p>
        </div>
      </div>
      <p className="text-xs border-t py-2 mt-6">
        © 2023 - Developed by <Link
          href="https://najim-rizky.com"
          target="_blank"
          className="font-bold hover:underline"
        >
          najimRizky
        </Link>
      </p>
    </footer>
  )
}

export default Footer