import React from "react";

const BlogPost = () => {
    return (
        <section id="blog" className="max-w-3xl mx-auto px-6 py-12 sm:py-24 bg-gray-100 text-black">
            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "Adventures, Algorithms, and Accidental Food Poisoning!",
                        "datePublished": "2025-03-03",
                        "dateModified": "2025-02-18",
                        "description": "Started the year with a mountain hike, surprised friends and family, battled LeetCode, and got food poisoning—2025 is already one for the books!",
                        "image": "https://?title=Adventures, Algorithms, and Accidental Food Poisoning!",
                        "url": "",
                        "author": { "@type": "Person", "name": "Subhashish Nayak" }
                    })
                }}
            />

            <h1 className="title font-medium text-2xl tracking-tighter">Adventures, Algorithms, and Accidental Food Poisoning!</h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm text-gray-600 dark:text-gray-400">
                <p>March 3, 2025 (2w ago)</p>
            </div>

            <article className="prose dark:prose-invert">
                <h3 className="font-sans text-2xl font-bold">Hey there, fellas!</h3>
                <p>
                    The past couple of days have been <em>wild</em>, and I can’t wait to tell you all about it...
                </p>
                <hr className="text-gray-300" />

                <h3><strong>The Self-Improvement Arc</strong></h3>
                <p>
                    In the spirit of being a <strong>better version of myself</strong> (or at least pretending to be one), I decided to start <a href="https://leetcode.com/u/Smruti1210/" className="text-blue-500">LeetCode</a>...
                </p>

                <hr />
                <h3><strong>The Travel Chronicles: Planes, Friends, and Food Poisoning</strong></h3>
                <h3><strong>Stop 1: <a href="https://www.visitsharjah.com/en/destinations/east-coast/khorfakkan/" className="text-blue-500">Khorfakkan, UAE</a> (New Year's Morning) 🌄</strong></h3>
                <p>Nothing screams <strong>“new year, new me”</strong> like <em>waking up at an ungodly hour to go hiking</em>!...</p>

                <hr />
                <h3 className="mt-4 mb-4"><strong>Photo Dump 📸</strong></h3>
                <div className="grid grid-cols-3 gap-4 mb-12">

                    <img src="/companylogo/1712662641232.jpg" alt="Konark temple visit" className="w-full h-full object-cover rounded" />
                    <img src="/companylogo/1712662641184.jpg" alt="We are chilling" className="w-full h-full object-fill rounded" />
                    <img src="/companylogo/20240704_200047.jpg" alt="Bhubaneswar evening" className="w-full h-full  rounded" />
                    <video controls className="h-auto w-full rounded">
                        <source src="/companylogo/jaga.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    <img src="/companylogo/20240826_172239.jpg" alt="We are chilling" className="w-auto h-full object-cover rounded" />
                    <img src="/companylogo/20240817_203501.jpg" alt="We are chilling" className="w-full h-full object-fill rounded" />
                    <img src="/companylogo/20240817_235331.jpg" alt="We are chilling" className="w-full h-full object-cover rounded" />
                    <img src="/companylogo/20240716_230625.jpg" alt="We are chilling" className="w-full h-full object-fill rounded" />
                </div>
            </article>
        </section>
    );
};

export default BlogPost;
