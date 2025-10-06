import { Mail } from 'lucide-react';

export default function Home({ goToResearch }: { goToResearch?: () => void }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-[300px,1fr] gap-12 mb-16">
  <div className="flex flex-col items-center w-full md:w-[300px] mx-auto">
          <div className="w-48 h-48 rounded-full bg-gray-200 mb-4 overflow-hidden border-4 border-white">
            <img
              src="./ehtashamul_haque.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 items-center mb-4">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-gray-700 dark:text-gray-200" />
              <a href='mailto:haque.eht@gmail.com' className="text-gray-700 dark:text-gray-200">haque.eht@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-gray-700 dark:text-gray-200" />
              <a href='mailto:ehtashamul.haque@bracu.ac.bd' className="text-gray-700 dark:text-gray-200">ehtashamul.haque@bracu.ac.bd</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://scholar.google.com/citations?user=Pr21S0QAAAAJ&hl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg"
                alt="Google Scholar"
                className="w-[28px] h-[28px]"
              />
            </a>
            <a
              href="https://www.researchgate.net/profile/Ehtashamul-Haque-2?ev=hdr_xprf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg"
                alt="ResearchGate"
                className="w-[28px] h-[28px]"
              />
            </a>
            <a
              href="https://orcid.org/0000-0002-9737-5698"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/ORCID_iD.svg"
                alt="ORCID"
                className="w-[28px] h-[28px]"
              />
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Ehtashamul Haque</h1>
          <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-200 leading-relaxed">
            <p className="mb-4">
              Hi! Welcome to my personal website. I am a researcher and an educator based in Dhaka, Bangladesh. I am currently serving as a lecturer in the Computer Science and Engineering department at BRAC University.
            </p>
            <p className="mb-4">
              My research interests lie at the intersection of explainable neuroimformatics and theoretical machine learning. While I have mainly worked with EEG data, I aim to expand my research to other neuroimformatic modalities. I am driven by the goal of advancing healthcare with the help of interpretable machine learning.
            </p>
            <p className="mb-4">
              I received my BSc in EEE from Islamic University of Technology (IUT), Dhaka, Bangladesh in 2022. While I did receive some preliminary training in machine learning during my undergraduate studies, my main exposure to the field and the also the domain specific knowledge of neuroimformatics and theoretical machine learning came afterwards through independent research and self-study.
            </p>

            <p>
              <b>I am applying to PhD programs for Fall 2026 admission in the areas of neuroimformatics and/or theoretical machine learning. If you are looking for a dedicated and passionate researcher to join your lab, please feel free to reach out. You can find my Research Statement <button type="button" className="underline hover:underline text-blue-700 dark:text-blue-300" style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={goToResearch}>here</button></b>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-12">
  <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">News</h2>
        <div className="space-y-6">

          <div className="border-l-2 border-gray-300 pl-4">
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-1">27 August 2025</p>
            <p className="text-gray-700 dark:text-gray-200">
              Awarded USD 1500 from BRAC University for attending KDD'25 in Toronto, Canada <i>(as a travel grant)</i>.
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-4">
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-1">3-7 August 2025</p>
            <p className="text-gray-700 dark:text-gray-200">
              Presented our paper and poster in KDD'25 at Toronto, Canada.
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-4">
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-1">15 May 2025</p>
            <p className="text-gray-700 dark:text-gray-200">
              Our paper "Fully quanvolutional networks for time series classification" has been accepted in the research track of ACM SIGKDD 2025 (CORE A*). See you in Toronto, Canada.
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-4">
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-1">29 July 2024</p>
            <p className="text-gray-700 dark:text-gray-200">
              Our paper "Nutrispace: A Novel Color Space to Enhance Deep Learning Based Early Detection of Cucurbits Nutritional Deficiency" has been accepted for publication in the journal Computers and Electronics in Agriculture [IF: 7.7].
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-4">
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-1">28 May 2024</p>
            <p className="text-gray-700 dark:text-gray-200">
              I have joined as a lecturer in the Computer Science and Engineering department at BRAC University.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
