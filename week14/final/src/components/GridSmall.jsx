export function GridSmall() {
return (

<div className="bg-white">
  <div aria-hidden="true" className="relative">
    <img
      src="./services.jpg"
      alt=""
      className="h-96 w-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-white" />
  </div>
  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Services
      </h2>
    </div>
    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
      <div className="border-t border-gray-200 pt-4">
        <dt className="font-medium text-gray-900">Website Design</dt>
        <dd className="mt-2 text-sm text-gray-500">
        Creating the overall look and feel of a website.
        Designing and coding the layout, color schemes, typography, and visual elements.
        Ensuring the design aligns with the client's branding.
        </dd>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <dt className="font-medium text-gray-900">Responsive Design</dt>
        <dd className="mt-2 text-sm text-gray-500">
        Designing websites that function well on various devices and screen sizes.
        Ensuring that the site is user-friendly on desktops, tablets, and smartphones.
        </dd>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <dt className="font-medium text-gray-900">UI/UX Design</dt>
        <dd className="mt-2 text-sm text-gray-500">Focusing on UI and UX.
        Creating intuitive and engaging interfaces.
        Enhancing user satisfaction by improving usability and accessibility.</dd>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <dt className="font-medium text-gray-900">Website Redesign</dt>
        <dd className="mt-2 text-sm text-gray-500">
        Updating and modernizing existing websites.
        Improving functionality, appearance, and performance.
        </dd>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <dt className="font-medium text-gray-900">E-commerce Design</dt>
        <dd className="mt-2 text-sm text-gray-500">
        Designing online stores and e-commerce platforms.
        Incorporating features like product listings, shopping carts, and payment gateways.
        </dd>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <dt className="font-medium text-gray-900">Content Management System (CMS) Integration</dt>
        <dd className="mt-2 text-sm text-gray-500">
        Integrating websites with CMS platforms like WordPress, Shopify, or Squarespace.
      Providing clients with the ability to manage and update their own content.
        </dd>
      </div>
    </dl>
  </div>
</div>

)
}