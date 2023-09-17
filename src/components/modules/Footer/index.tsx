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
            This project is designed solely for testing, focusing on functionality, performance, and compatibility. It lacks real-world applications or commercial use, serving as a controlled environment for experimentation and validation of concepts, software, or hardware. Test data and scenarios aim to identify issues, refine algorithms, and optimize systems. Any results should not be seen as practical utility, as the project sole purpose is controlled experimentation and testing.
          </p>
        </div>
      </div>
      <p className="text-sm border-t py-4 mt-6">
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