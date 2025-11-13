import {
  ShieldCheck,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Scentinel Pro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Advanced smart detection technology for safer homes and
              businesses.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* Liberty Social Icon */}
              <a
                href="#"
                aria-label="Liberty Social"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 200"
                  fill="currentColor"
                  className="h-8 w-8"
                  role="img"
                  aria-hidden="false"
                >
                  <g
                    transform="translate(0,200) scale(0.1,-0.1)"
                    stroke="none"
                  >
        <path d="M1340 1799 c-19 -6 -88 -35 -154 -66 -136 -63 -216 -83 -337 -83
l-86 0 -7 -80 c-17 -194 31 -465 116 -652 l31 -68 43 0 c24 0 44 5 44 10 0 6
-11 32 -24 58 -72 143 -114 320 -123 517 l-6 130 79 2 c97 3 178 27 337 100
114 53 127 57 197 57 71 0 82 -3 205 -61 148 -70 228 -93 326 -96 l69 -2 0
-103 c0 -200 -44 -385 -146 -608 -3 -8 11 -13 40 -15 l45 -4 25 55 c82 182
120 370 121 595 l0 160 -115 6 c-142 8 -170 15 -334 92 -126 58 -134 61 -221
63 -49 2 -106 -1 -125 -7z m-500 -198 c0 -12 -29 -35 -36 -28 -11 10 5 37 21
37 8 0 15 -4 15 -9z"/>
        <path d="M1150 1536 c0 -7 14 -16 30 -19 l30 -6 0 -186 0 -185 -30 -6 c-16 -4
-30 -13 -30 -20 0 -19 319 -21 325 -1 2 6 5 36 8 65 3 43 1 52 -12 52 -9 0
-23 -17 -32 -39 -18 -42 -35 -49 -97 -42 l-32 3 2 182 c3 179 3 181 26 184 12
2 22 10 22 18 0 11 -21 14 -105 14 -82 0 -105 -3 -105 -14z m107 -323 c-2 -37
-3 -9 -3 62 0 72 1 102 3 68 2 -34 2 -93 0 -130z"/>
        <path d="M1521 1532 c-68 -34 -94 -106 -61 -167 8 -15 46 -45 85 -68 38 -22
78 -47 88 -55 17 -15 23 -58 9 -79 -10 -16 -57 -33 -93 -33 -24 0 -30 -4 -27
-17 7 -40 119 -27 173 20 30 26 38 40 41 77 7 63 -19 99 -105 149 -85 50 -101
65 -101 96 0 70 125 72 149 3 15 -43 35 -30 39 24 l3 45 -45 12 c-64 16 -116
14 -155 -7z m97 -216 c34 -21 62 -39 62 -41 0 -2 3 -12 7 -22 4 -11 -11 -3
-39 22 -25 22 -66 52 -91 67 -25 14 -51 37 -57 50 -11 20 -8 19 21 -8 19 -17
62 -48 97 -68z"/>
        <path d="M1747 1014 c-10 -11 -9 -124 2 -124 11 0 24 111 13 122 -5 5 -11 5
-15 2z"/>
        <path d="M1010 950 c0 -57 1 -60 24 -60 14 0 28 5 31 10 3 6 -1 10 -9 10 -12
0 -16 11 -16 50 0 38 -4 50 -15 50 -12 0 -15 -13 -15 -60z"/>
        <path d="M1074 994 c3 -9 6 -36 6 -60 0 -24 5 -44 10 -44 6 0 10 27 10 60 0
48 -3 60 -16 60 -11 0 -14 -5 -10 -16z"/>
        <path d="M1120 951 c0 -58 1 -61 25 -61 24 0 51 31 38 44 -3 3 -6 20 -7 38 -1
28 -5 33 -28 36 -28 3 -28 3 -28 -57z"/>
        <path d="M1200 949 c0 -60 0 -60 28 -57 26 3 35 23 10 23 -18 0 -21 24 -4 31
20 8 21 24 1 24 -8 0 -15 5 -15 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 -13 10
-30 10 l-30 0 0 -61z"/>
        <path d="M1270 950 c0 -61 16 -83 22 -32 l4 27 12 -27 c6 -16 17 -28 23 -28 7
0 8 7 3 18 -4 9 -6 36 -5 60 2 41 1 42 -29 42 l-30 0 0 -60z"/>
        <path d="M1350 997 c10 -8 14 -26 12 -59 -2 -38 0 -48 12 -48 12 0 16 11 16
49 0 28 5 53 11 56 15 10 18 5 31 -53 13 -55 28 -69 28 -27 0 14 7 41 14 60
13 31 13 35 0 35 -7 0 -14 -7 -14 -15 0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15
0 11 -12 15 -52 15 -43 -1 -50 -3 -38 -13z"/>
        <path d="M1513 994 c-3 -8 4 -25 16 -38 25 -27 30 -56 6 -36 -22 18 -32 3 -13
-17 9 -8 24 -13 32 -10 20 8 21 51 1 67 -8 7 -15 16 -15 21 0 5 7 6 15 3 9 -4
15 0 15 10 0 21 -48 22 -57 0z"/>
        <path d="M1597 1004 c-14 -14 -8 -102 8 -108 33 -12 46 4 43 58 -3 43 -6 51
-23 54 -12 2 -24 0 -28 -4z m33 -48 c0 -19 -4 -38 -10 -41 -6 -4 -10 10 -10
34 0 23 5 41 10 41 6 0 10 -15 10 -34z"/>
        <path d="M1670 955 c0 -61 18 -81 48 -52 19 20 9 35 -13 17 -13 -11 -15 -7
-15 29 0 39 13 55 23 29 2 -7 8 -10 12 -6 14 14 -5 38 -30 38 -24 0 -25 -3
-25 -55z"/>
        <path d="M1791 960 c-14 -63 -14 -70 -1 -70 6 0 10 7 10 15 0 8 7 15 15 15 8
0 15 -7 15 -15 0 -8 5 -15 10 -15 13 0 13 7 -1 70 -6 30 -16 50 -24 50 -8 0
-18 -20 -24 -50z"/>
        <path d="M1862 953 c3 -51 6 -58 26 -61 23 -4 31 13 10 20 -8 3 -11 21 -9 51
2 38 -1 47 -14 47 -13 0 -15 -10 -13 -57z"/>
        <path d="M1000 845 c-107 -7 -197 -13 -199 -14 -2 0 -1 -22 3 -47 l6 -47 -97
6 c-54 3 -120 13 -148 21 -27 8 -51 13 -54 11 -8 -8 22 -57 66 -106 l43 -47
-50 -63 c-27 -35 -50 -67 -50 -71 0 -18 117 -33 255 -33 192 0 205 3 205 54
l0 38 -55 -5 c-32 -3 -55 0 -55 5 0 9 36 13 310 29 l105 7 -7 91 c-3 50 -7
112 -7 139 l-1 47 -37 -2 c-21 0 -126 -7 -233 -13z m75 -55 c8 0 11 -7 8 -19
-5 -22 -35 -23 -44 -1 -3 8 -1 20 5 26 6 7 13 8 14 3 2 -5 10 -9 17 -9z m88
14 c21 -8 9 -44 -15 -44 -10 0 -16 5 -13 10 3 6 1 10 -5 10 -7 0 -6 5 2 15 16
17 13 16 31 9z m-177 -43 c0 -9 -8 -17 -18 -17 -10 0 -18 6 -18 12 0 7 -6 15
-12 17 -8 3 -6 6 5 6 9 1 17 6 17 11 0 7 5 6 13 -1 7 -7 13 -20 13 -28z m-90
2 c-3 -8 -6 -17 -6 -19 0 -2 -6 -4 -14 -4 -18 0 -27 25 -14 38 14 14 40 3 34
-15z m343 -39 c-6 -8 -8 -14 -3 -15 5 0 0 -4 -11 -8 -14 -6 -22 -4 -26 8 -8
20 11 39 33 33 14 -3 16 -7 7 -18z m-204 -4 c20 0 6 -36 -15 -37 -23 -2 -34
24 -17 42 6 7 14 9 15 4 2 -5 10 -9 17 -9z m88 14 c21 -8 10 -40 -14 -41 -11
-1 -17 2 -14 7 3 4 -1 11 -7 13 -10 4 -9 8 2 16 18 13 15 12 33 5z m-177 -44
c0 -21 -29 -21 -37 0 -8 19 12 40 26 27 6 -6 11 -18 11 -27z m-279 0 c12 0 13
-3 4 -13 -6 -8 -7 -17 -3 -21 4 -5 -2 -6 -13 -4 -24 4 -36 28 -21 44 6 7 13 8
14 3 2 -5 11 -9 19 -9z m86 -30 c-2 -9 -13 -16 -24 -16 -12 0 -18 5 -15 13 3
7 0 13 -6 13 -7 0 -3 6 7 14 22 16 45 1 38 -24z m84 20 c12 0 13 -3 4 -13 -6
-8 -7 -17 -3 -21 4 -5 -2 -6 -13 -4 -24 4 -36 28 -21 44 6 7 13 8 14 3 2 -5
11 -9 19 -9z m349 -39 c0 -10 -10 -17 -23 -17 -13 -1 -21 2 -18 6 3 5 0 12 -5
15 -7 5 -5 11 6 20 20 14 40 2 40 -24z m-93 -11 c-6 -21 -36 -21 -44 0 -3 8
-1 19 5 26 15 16 45 -4 39 -26z m-186 -12 c0 -20 -34 -20 -42 0 -2 7 1 19 7
26 15 15 35 0 35 -26z m90 1 c2 -20 -29 -20 -38 1 -8 20 12 40 26 27 6 -6 12
-18 12 -28z m-293 -1 c19 -18 9 -47 -14 -41 -31 8 -32 44 -2 52 2 1 9 -4 16
-11z m89 -28 c-6 -22 -41 -23 -39 -2 0 9 5 22 11 28 13 14 33 -5 28 -26z
m-127 -40 c11 0 12 -4 3 -18 -15 -23 -47 -26 -45 -4 1 21 20 44 24 31 2 -5 10
-9 18 -9z m87 -30 c-2 -9 -13 -16 -24 -16 -12 0 -18 5 -15 13 3 7 0 13 -6 13
-7 0 -3 6 7 14 22 16 45 1 38 -24z m84 20 c12 0 13 -3 4 -13 -6 -8 -7 -17 -3
-21 4 -5 -2 -6 -13 -4 -24 4 -36 28 -21 44 6 7 13 8 14 3 2 -5 11 -9 19 -9z"/>
        <path d="M1283 836 c4 -10 7 -23 7 -30 0 -10 56 -14 233 -19 232 -7 354 -16
500 -38 68 -10 77 -14 77 -33 0 -43 -9 -46 -105 -31 -133 21 -348 35 -538 35
l-168 0 3 -29 3 -30 207 -6 c263 -7 532 -33 567 -54 7 -5 9 -19 5 -38 l-6 -30
-61 13 c-109 22 -246 34 -479 41 l-228 6 0 -34 0 -34 107 3 c60 2 147 -1 194
-5 l86 -8 -109 -90 c-59 -49 -113 -92 -118 -93 -15 -5 -111 69 -202 155 -77
73 -77 73 -133 73 l-56 0 57 -64 c61 -70 175 -170 266 -236 l57 -41 39 25 c60
38 181 139 247 205 l59 61 64 0 64 0 -4 -37 -3 -38 90 -17 c113 -22 262 -23
340 -2 33 8 64 19 69 24 5 5 -16 40 -48 81 -57 72 -57 72 -37 93 32 36 101
139 101 152 0 9 -15 7 -56 -7 -68 -24 -165 -34 -219 -22 -37 8 -40 11 -37 39
l3 30 -148 18 c-94 12 -247 20 -422 24 -256 4 -274 4 -268 -12z m1006 -166
c30 5 56 9 58 7 1 -2 -12 -20 -31 -40 -36 -40 -65 -45 -170 -31 -42 6 -46 9
-46 34 0 15 2 29 5 32 3 2 33 1 67 -4 38 -5 83 -4 117 2z m-545 -139 c3 -4 -3
-16 -14 -26 -19 -18 -20 -17 -20 8 0 26 22 38 34 18z m596 -16 c37 -33 9 -40
-165 -40 -90 0 -161 3 -157 7 4 3 18 8 32 10 16 2 26 10 28 24 3 20 8 21 123
19 99 -2 123 -5 139 -20z m-340 -26 c0 -25 -33 -22 -38 4 -2 12 3 17 17 17 15
0 21 -6 21 -21z"/>
      </g>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#product"
                  className="hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#buy" className="hover:text-primary transition-colors">
                  Buy Now
                </a>
              </li>
              <li>
                <a
                  href="#firmware"
                  className="hover:text-primary transition-colors"
                >
                  Firmware
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  className="hover:text-primary transition-colors"
                >
                  Register Device
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#support"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <NavLink
                  to="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
                <li>
                <a href="./GB-1.pdf" target="_blank" className="hover:text-primary transition-colors">
                  Global Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Scentinel Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
