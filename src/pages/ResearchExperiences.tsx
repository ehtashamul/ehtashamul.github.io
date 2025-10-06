export default function ResearchExperiences({ goToHome }: { goToHome?: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
  <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Research Experiences</h1>

  <p className="mb-8 text-gray-700 dark:text-gray-200">For a proper list of my publications, please visit my <u><a href = "https://scholar.google.com/citations?user=Pr21S0QAAAAJ&hl" className="text-blue-700 dark:text-blue-300 underline">Google Scholar</a></u>. If you need the pdfs to any of the paper, feel free to send me an email. You can find my emails in the <span className="underline hover:underline cursor-pointer text-blue-700 dark:text-blue-300" onClick={goToHome}>Home page</span>.</p>

      <section className="mb-12">
  <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-200 pb-2">
          Ongoing Projects
        </h1>
        <div className="space-y-8">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between items-start mb-2">
              <h2 className="font-bold text-gray-900 dark:text-gray-100 text-lg md:mb-0 mb-1">1. Explainable EEG biomarkers for Major Depressive Disorder (MDD) </h2>
              <span className="text-sm text-gray-400 dark:text-gray-400 md:ml-4">2024 - Present</span>
            </div>
            <div className="pl-4">
              <b className="text-sm text-gray-600 dark:text-gray-300 mb-2 block">Supervisor - <u><a href = 'https://about.uq.edu.au/experts/32270' className="text-blue-700 dark:text-blue-300 underline">Dr Mohammad Ali Moni </a></u></b>
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                 The project started with a simple question - if a classification model trained to distinguish between MDD and healthy controls can obtain &gt;95% accuracy, can we not use the model to identify the important markers in the data? In literature almost all models report very high accuracy when it comes to demarcating between an EEG reading coming from an MDD patient and a healthy control. However, almost no work has gone into the depth of the markers these models are learning. Why? Its because it is hard to regulate the training and formulate a proper experimental setup that stops the model from overfitting on noise. In this project, we are developing an interpretable model that resists overfitting [1]. If this research is successful, it would enhance our understanding of MDD, and hopefully, provide useful biomarkers that can be used for real. Our initial results are promising and suggest that some interpretability is indeed achievable.
              </p>
              <b className="text-sm text-gray-600 dark:text-gray-300 mb-2 block mt-2">Papers</b>
              <ol type="1" className="list-decimal list-inside mt-2">
                <li className="text-sm text-gray-600 dark:text-gray-300 mb-2"><u>Haque E</u>, Orka NA, Jannat M, Moni MA. <b>Generalized EEG representation learning captures deviations linked to major depressive disorder.</b><i> In Preparation.</i></li>
              </ol>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between items-start mb-2">
              <h2 className="font-bold text-gray-900 dark:text-gray-100 text-lg md:mb-0 mb-1">2. Developing Efficienct Quantum Convolutional Networks</h2>
              <span className="text-sm text-gray-400 dark:text-gray-400 md:ml-4">2024 - Present</span>
            </div>
            <div className="pl-4">
              <b className="text-sm text-gray-600 dark:text-gray-300 mb-2 block">Supervisor - <u><a href = 'https://about.uq.edu.au/experts/32270' className="text-blue-700 dark:text-blue-300 underline">Dr Mohammad Ali Moni </a></u></b>
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                The project started with the goal of creating models trained on biomedical signals that can run in both classical and quantum environments. However after a thorough literature review, we realized that quantum convolutional networks have not been properly explored for time series data, which was a barrier towards implementing generalized models in the quantum domain. This gap in research motivated us to pivot our focus towards developing efficient QCNN architectures tailored for time series classification tasks. With that effect we have already published a paper in KDD'25 where we proposed a new quanvolutional architecture [3]. But it had certain limitations which are being addressed currently.
              </p>
              <b className="text-sm text-gray-600 dark:text-gray-300 mb-2 block mt-2">Papers</b>
              <ol type="1" className="list-decimal list-inside mt-2">
                <li className="text-sm text-gray-600 dark:text-gray-300 mb-2"><u>Haque E</u>, Orka NA, Moni MA. <b>A linearly scaled quanvolutional nerual network for continuous value prediction</b>. <i>In preparation</i>.</li>
                <li className="text-sm text-gray-600 dark:text-gray-300 mb-2">Orka NA, <u>Haque E</u>, Jannat M, Aloteibi S, Awal MA, Moni MA. <b>QuanvNeXt: An end-to-end quanvolutional neural network for EEG-based detection of major depressive disorder</b>. <i>Under Review</i>.</li>
                <li className="text-sm text-gray-600 dark:text-gray-300 mb-2">Orka NA, <u>Haque E</u>, Awal MA, Moni MA. <b>Fully quanvolutional networks for time series classification</b>. <i>ACM SIGKDD Conference on Knowledge Discovery and Data Mining.</i> 2025. <b>[CORE A*]</b> <u><a href = "https://dl.acm.org/doi/abs/10.1145/3711896.3736972" className="text-blue-700 dark:text-blue-300 underline">Link to paper.</a></u> </li>
              </ol>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between items-start mb-2">
              <h2 className="font-bold text-gray-900 dark:text-gray-100 text-lg md:mb-0 mb-1">3. Development of Foundational Agricultural AI Models </h2>
              <span className="text-sm text-gray-400 dark:text-gray-400 md:ml-4">2022 - Present</span>
            </div>
            <div className="pl-4">
              <b className="text-sm text-gray-600 dark:text-gray-300 mb-2 block">Supervisor - <u><a href = 'https://scholar.google.com/citations?user=wVbAmiwAAAAJ&hl=en' className="text-blue-700 dark:text-blue-300 underline">
              Dr. M Nazim Uddin</a></u></b>
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                Agriculture data is scarce and often lacks the diversity needed to train robust AI models. This project aims to at first create large-scale and diverse datasets and then develop a foundational model trained on the collected dataset which can later be fine tuned to fit various downstream tasks in agriculture even with inadequate samples. We are currently in the data collection and procurement phase, and so far we have collected nearly 13,000 images of different crop leaves with various biotic and abiotic stresses. We have published one segment of the data along with a new theoretical color space that can significantly enhance classification performance (<i>healthy vs unhealthy leaves</i>) on certain crop variety [1]. Currently we are waiting for the collected data to get segmented by experts so that we can further venture into the segmentation problem, which is in fact more important than basic classification in terms of the domain, and release more of the dataset publicly. Once we are done with the data, we will move on to the foundational model development phase.
              </p>
              <b className="text-sm text-gray-600 dark:text-gray-300 mb-2 block mt-2">Papers</b>
              <ol type="1" className="list-decimal list-inside mt-2">
                <li className="text-sm text-gray-600 dark:text-gray-300 mb-2">Orka NA, <u>Haque E</u>, Uddin MN and Ahamed T. <b>Nutrispace: A novel color space to enhance deep learning based early detection of cucurbits nutritional deficiency.</b> <i>Computers and Electronics in Agriculture</i>  2024. <b>[IF: 7.7]</b> <u><a href = "https://www.sciencedirect.com/science/article/abs/pii/S0168169924006872?via%3Dihub" className="text-blue-700 dark:text-blue-300 underline">Link to paper.</a></u></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
  <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-200 pb-2">
          Other Published Research
        </h2>
        <div className="space-y-8">
          <ol type="1" className="list-decimal pl-6 space-y-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
            <li>
              Rahman MR, <u>Haque E</u>, Rahman ST, Kabir HK and Ahmed YA. <b>Modelling of an efficient system for predicting ships' estimated time of arrival using artificial neural network</b>. <i>In Computational Intelligence: Select Proceedings of InCITe 2022</i>. 2023. <i>[Undergrad thesis topic]</i> <u><a href="https://link.springer.com/chapter/10.1007/978-981-19-7346-8_18" className="text-blue-700 dark:text-blue-300 underline">Link to paper.</a></u>
            </li>
            <li>
              <u>Haque E</u>, Tabassum S and Hossain E. <b>A comparative analysis of deep neural networks for hourly temperature forecasting</b>. <i>IEEE Access</i>. 2021. <b>[IF: 3.6]</b> <u><a href="https://ieeexplore.ieee.org/document/9628089" className="text-blue-700 dark:text-blue-300 underline">Link to paper.</a></u>
            </li>
            <li>
              Rahman MR, Tabassum S, <u>Haque E</u>, Nishat MM, Faisal F and Hossain E. <b>CNN-based deep learning approach for micro-crack detection of solar panels</b>. <i>International Conference on Sustainable Technologies for Industry 4.0 (STI)</i>. 2021 <u><a href = 'https://ieeexplore.ieee.org/document/9732592' className="text-blue-700 dark:text-blue-300 underline">Link to paper. </a></u>
            </li>
            <li>
              Taz NH, Islam A, Mahmud I, <u>Haque E</u> and Rahman MR. <b>A Comprehensive Exploration on Impact of Preprocessing for Prediction of Chronic Kidney Disease Using Multiple Machine Learning Approaches</b>. <i>International Conference on Science & Contemporary Technologies (ICSCT)</i>. 2021. <u><a href = "https://ieeexplore.ieee.org/document/9642638" className="text-blue-700 dark:text-blue-300 underline">Link to paper</a></u>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
