import React from 'react'
import { Link } from 'react-router-dom';
import gecg2 from '.././images/gecgh2.jpg'

function Hero() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={gecg2} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to the Social Courier of the
                            <br class="hidden lg:inline-block" />Government Engineering College Gandhinagar
                        </h1>
                        <p class="mb-8 leading-relaxed">This is a website for a courier service provided to the college students by the college students. In this the student has to enter the details of the items he/she wants to get delivered. In this scenario the website will give the details regarding the courier to the volunteer delivery student in the area where the product will be delivered. This will be a voluntary task which will be done by authenticated students only.</p>
                        <div class="flex justify-center">
                            <Link to="/request">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Request Form</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistic */}

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                            <p class="leading-relaxed">Users</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                            <p class="leading-relaxed">Subscribes</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
                            <p class="leading-relaxed">Downloads</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                            <p class="leading-relaxed">Products</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;