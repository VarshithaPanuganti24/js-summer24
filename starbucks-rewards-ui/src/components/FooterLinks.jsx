import React from "react";

const FooterLinks = () => {
  return (
    <footer className="p-8 bg-white text-gray-800 text-start">
      <hr className="border-t-2 border-gray-300 pt-3 pb-6 md:pt-4 md:pb-7" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="pb-10">
          <h3 className="font-semibold mb-2 pb-4">About Us</h3>
          <ul className="space-y-4">
            <li>Our Company</li>
            <li>Our Coffee</li>
            <li>About Starbucks</li>
            <li>Starbucks Archive</li>
            <li>Investor Relations</li>
            <li>Customer Service</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 pb-4">Careers</h3>
          <ul className="  space-y-4 ">
            <li>Culture and Values</li>
            <li>Belonging at Starbucks</li>
            <li>College Achievement Plan</li>
            <li>Alumni Community</li>
            <li>U.S. Careers</li>
            <li>International Careers</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 pb-4">Social Impact</h3>
          <ul className="space-y-4">
            <li>Communities</li>
            <li>Starbucks Foundation</li>
            <li>Sustainability</li>
            <li>Environmental and Social Impact Reporting</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 pb-4">For Business Partners</h3>
          <ul className="space-y-4">
            <li>Landlord Support Center</li>
            <li>Suppliers</li>
            <li>Corporate Gift Card Sales</li>
            <li>Office and Foodservice Coffee</li>
          </ul>
        </div>
      </div>

      <hr className="border-t-2  border-gray-300 pt-6 pb-6 md:pt-4 md:pb-7" />

      <div className="pb-6">
        <ul class="flex  flex-row gap-4 text-green-600">
          <li>
            <img
              src="/spotify-icon-2048x2048-n3imyp8e.png"
              alt="Spotify"
              class="w-8 h-8"
            />
          </li>
          <li>
            <img
              src="/facebook_circle_black-512.webp"
              alt="Spotify"
              class="w-8 h-8"
            />
          </li>
          <li>
            <img src="/pin.png" alt="Spotify" class="w-8 h-8" />
          </li>
          <li>
            <img src="/instagramicon.png" alt="Spotify" class="w-8 h-8" />
          </li>
          <li>
            <img src="/youtubeicon.png" alt="Spotify" class="w-8 h-8" />
          </li>
          <li>
            <img src="/x.png" alt="Spotify" class="w-8 h-8" />
          </li>
        </ul>
      </div>

      <div>
        <ul className="space-y-4">
          <li>Privacy Notice</li>
          <li>Consumer Health Privacy Notice</li>
          <li>Terms of Use</li>
          <li>Do Not Share My Personal Information</li>
          <li>CA Supply Chain Act</li>
          <li>Accessibility</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>
      <p className="pb-30 pt-8">
        © 2025 Starbucks Coffee Company. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterLinks;

{
  /* <div>
          <ul class="flex flex-wrap sb-footer-iconMarginAdjust">
            <li class="sm-mr1">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-700"
                aria-hidden="true"
              >
                <path d="M12,0 C18.627...Z" />

                <circle cx="50%" cy="50%" fill="transparent" r="75%"></circle>
              </svg>
            </li>
            <li class="sm-mr1">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-700"
                aria-hidden="true"
              >
                <path d="M12,0 C18.627...Z" />

                <circle cx="50%" cy="50%" fill="transparent" r="75%"></circle>
              </svg>
            </li>
            <li class="sm-mr1">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-700"
                aria-hidden="true"
              >
                <path d="M12,0 C18.627...Z" />

                <circle cx="50%" cy="50%" fill="transparent" r="75%"></circle>
              </svg>
            </li>
            <li class="sm-mr1">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-700"
                aria-hidden="true"
              >
                <path d="M12,0 C18.627...Z" />

                <circle cx="50%" cy="50%" fill="transparent" r="75%"></circle>
              </svg>
            </li>
          </ul>
        </div> */
}
