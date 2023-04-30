import React from 'react'

function About() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow h-[275px]">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">About Us</h2>
            <p className="leading-relaxed text-base">The Social Courier Service system is a courier system developed for the students of college where they can ask for their requirements and get it delivered in short time by their college friends who are staying in their near-by location. By using this system the students can get their items from authenticated and verified sources. Students ask for their requirements and can also initiate a hand of help to assist other students.</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow h-[275px]">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Key Features</h2>
            <p className="text-purple-900 leading-loose text-base font-medium">-Easy to navigate  <br/>-Time saving <br/>-Authentic <br/>-Secure <br/>-Verified <br/>-Volunteer Work <br/>-Easy Accessible</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About;