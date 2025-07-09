// 生成指定範圍內的隨機日期字符串
const getRandomDate = (start, end) => {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();
  const randomDate = new Date(startDate + Math.random() * (endDate - startDate));
  return randomDate.toISOString().split('T')[0];
};

export const MOCK_PUBLICATIONS = [
  {
    id: 1,
    title: "AI Integration into Wavelength-based SPR Biosensing: Advancements in Spectroscopic Analysis and Detection",
    abstract: "In recent years, employing deep learning methods in the biosensing area has significantly reduced data analysis time and enhanced data interpretation and prediction accuracy. In some SPR fields, research teams have further enhanced detection capabilities using deep learning techniques. However, the application of deep learning to spectroscopic surface plasmon resonance (SPR) biosensors has not been reported. This study addresses the integration of AI methods to improve the signal-to-noise ratio (SNR) and detection accuracy of wavelength-based portable SPR biosensors. Results We designed a deep neural network integrated with the spectral subtraction method to extract SPR responses from the proposed portable SPR biosensor. Using difference spectra as the model input, our AI model provided superior noise reduction and enhanced detection capabilities, outperforming traditional spectral feature extraction methods like dip or centroid positioning. Our study achieved a significantly amplified SNR and improved detection resolution to an impressive 10-7 RIU level. In addition, we employ Shapley Additive Explanations (SHAP) analysis to determine which parts of the input the AI model considers most important when extracting SPR response, thereby increasing the interpretability and transparency of the AI model. The results indicate that the wavelength regions considered most important by our proposed AI model are very close to the full width at half maximum (FWHM) range. This region is also recognized by traditional theory as having a significant impact on the sensitivity of SPR sensing. Significance Integrating AI into wavelength-based portable SPR biosensing represents a significant advancement in on-site detection technologies, driving potential applications across various monitoring scenarios. Our findings highlight the AI model's effectiveness in reducing noise and enhancing detection accuracy, particularly in measurements involving low-concentration analytes. This innovation holds great promise for fields that demand real-time, high-precision, on-site detection, such as biomedical diagnostics, environmental monitoring, and biochemical analysis, setting the stage for transformative shifts in these critical areas.",
    authors: ["王大明", "李小華", "陳志明", "張美玲"],
    publishDate: "2025",
    journal: "Analytica Chimica Acta",
    tags: ["電磁波吸收", "超材料設計"],
    url: ""
  },
  {
    id: 2,
    title: "A simplified approach to 3D spherical cloaking using shell based dielectric metamaterials",
    abstract: "",
    authors: ["Jing-Hao Huang", "He-Jun Ren", "Tsung-Yu Huang"],
    publishDate: "2025",
    journal: "Scientific Reports",
    tags: [],
    url: ""
  },
  {
    id: 3,
    title: "Thermal-Driven Cobalt Intercalation Enhances Thermoelectric ZT of n‑Type Bi2Te2.7Se0.3",
    abstract: "Layered materials have emerged as stars in the realm of nanomaterials, showcasing exceptional versatility in various fields. This investigation employed a thermally driven method to intercalate cobalt (Co) into the van der Waals gaps of (CuI)0.002Bi2Te2.7Se0.3 crystals and investigated the mechanism by which the intercalated Co enhances the thermoelectric performance of the material. Co intercalation decreases the carrier concentration, thereby improving the Seebeck coefficient and decreasing both the mobility and the electrical conductivity. These effects result in a significant enhancement of the power factor above 400 K. Theoretical electronic structure calculations provide insights into the role of Co in this material. Additionally, the presence of intercalated Co significantly enhances phonon scattering, thereby boosting the thermoelectric figure-of-merit, ZT to 1.33 at 350 K for 0.17% Co intercalation. These findings highlight the potential of Co incorporation for improving the thermoelectric energy efficiency of n-type Bi2Te2.7Se0.3, offering avenues for further optimization in thermoelectric applications.",
    authors: ["Te-Hsien Wang", "Tsung-Yu Huang", "Cheng-Lung Chen"],
    publishDate: "2024",
    journal: "ACS Applied Materials & Interfaces",
    tags: [],
    url: ""
  },
  {
    id: 4,
    title: "This study showcases the use of ion-beam-assisted deposition for fabricating p-type SnO thin films at room temperature, which reveals crucial links between Hall mobility and lattice disorder, and between hole concentration and the relative content of interstitial oxygen.",
    abstract: "This study showcases the use of ion-beam-assisted deposition for fabricating p-type SnO thin films at room temperature, which reveals crucial links between Hall mobility and lattice disorder, and between hole concentration and the relative content of interstitial oxygen.",
    authors: ["Mochamad Januar", "Cheng-Yu Lu", "Horng-Chih Lin", "Tsung-Yu Huang", "Chia-Ming Yang", "Kuo Kang Liu", "Kou-Chen Liu"],
    publishDate: "2024",
    journal: "Materials Advances",
    tags: [],
    url: ""
  },
  {
    id: 5,
    title: "Broadband surface enhanced infrared absorption with multiple Fano resonance by metallic oblique-wire-bundle metamaterial absorbers",
    abstract: "Higher sensitivity with specific recognition of a sensor could ease the burden of sample purification or labelling procedure for specific testing and detection and there appear two methods including surface enhanced infrared absorption (SEIRA) and surface enhanced Raman scattering (SERS), promising better sensitivity and specificity, simultaneously, via detection of molecular footprints. Furthermore, researchers employ Fano resonance to further boost the detection limit of SEIRA by coupling between two absorption bands from molecules and metamaterials. Still, the current metamaterial absorbers are almost narrow band and require a specific design, only suitable for limited chemicals. Thus, in this work, we would like to design a broadband oblique-wire-bundle (OWB) metamaterial absorber (MA) which could interact with multiple functional groups’ absorption from a sample, thus easing the burden of custom-made resonators. In experiments, indeed, our designed OWB MA developed four Fano resonance responses with three PMMAs’ functional groups and one function group from carbon dioxide. The counterpart planar MA also performed SEIRA yet without occurrence of Fano resonance as a comparison. We believe this proposed OWB MA could facilitate the development of rapid detection in the field of food safety and chemical detection.",
    authors: ["Hsueh-Shun Lee", "Yu-Ping Kuang", "Cheng-Yu Lu", "Ta-Jen Yen", "Tsung-Yu Huang"],
    publishDate: "2024",
    journal: "Scientific Reports",
    tags: [],
    url: ""
  },
  {
    id: 6,
    title: "Nanoscale plasmonic wires with maximal figure of merits as a superior flexible transparent conducting electrode for RGB colors",
    abstract: "Based on incredibly increasing applications in modern optoelectronic devices, the demand for securing a superior conductive transparent electrode (TCE) candidate becomes significant and urgent. However, boosting both transmittance and conductance simultaneously is an intrinsic limitation. In this work, we present silver nanoscale plasmonic wires (Ag NPWs) to function as TCEs in the visible light region by lowering their corresponding plasma frequencies. By carefully designing geometric dimensions of the Ag NPWs, we also optimize the performance for red, green, and blue colors, respectively. The demonstrated figure of merits for RGB colors appeared respectively 443.29, 459.46, and 133.78 in simulation and 302.75, 344.11, and 348.02 in experiments. Evidently, our Ag NPWs offer much greater FoMs beyond conventional TCEs that are most frequently comprised of indium tin oxide and show further advantages of flexibility and less Moire effect for the applications of flexible and high-resolution optoelectronic devices.",
    authors: ["Chin-Chien Chung", "Dong-Sheng Su", "Tsung-Yu Huang", "Cheng-Yi Lee", "Robert Jan Visser", "B. Leo Kwak", "Hyunsung Bang", "Chung-Chia Chen", "Wan-Yu Lin", "Ta-Jen Yen"],
    publishDate: "2022",
    journal: "Scientific Reports",
    tags: [],
    url: ""
  },
  {
    id: 7,
    title: "Creating hot spots within air for better sensitivity through design of oblique-wire-bundle metamaterial perfect absorbers",
    abstract: "Better sensitivity of a biosensor could boost up the detection limit of analytes, thus a must in the fields of bio-sensing and bio-detection. To further enhance the sensitivity of a biosensor, in this work, we design an oblique-flat-sheet metamaterial perfect absorber (MPA) to concentrate the hot spots within air between the oblique flat sheet and the continuous ground metal, thus enabling fully interaction between analytes and hot spots. The corresponding field distributions in simulation corroborated our assumption and its sensitivity could be up to 1049 nm/RIU. Then, we fabricated the sample by e-beam lithography process for a seed layer and simply tilting the sample during deposition to obtain oblique flat sheets. When considering the stochastic nature of the deposited multiple oblique flat sheets, we modified the metallic upper resonator of the MPA from the single oblique-flat-sheet into randomly distributed oblique-wire-bundle (OWB) and in simulation, its sensitivity is boosted up to 3319 nm/RIU. In experiments, the measured sensitivity is 1329 nm/RIU under different concentrations of glucose solutions that is four times larger than the 330 nm/RIU of the planar MPA. The higher sensitivity was attributed to that the OWB MPA could provide hot spots within air not only between OWB and grounded metal but also among wires. Moreover, the OWB could also trap and concentrate the analytes locally.",
    authors: ["Xin-Xian Wu", "Cheng-Yu Lu", "Tsung-Yu Huang"],
    publishDate: "2022",
    journal: "Scientific Reports",
    tags: [],
    url: ""
  },
  {
    id: 8,
    title: "TiO2 Nanodisk Arrays as All-Dielectric Huygens’ Metasurfaces for Engineering the Wavefront of Near-UV Light",
    abstract: "Electromagnetic components are important for ultraviolet (UV) applications. However, due to the limitation in the materials’ intrinsic responses, there are fewer electromagnetic components in high-frequency regimes than in low-frequency ones. Conventional UV components manipulate the wavefront via geometric phase accumulation; thus, they are significantly bulky and inefficient. In this study, we demonstrate all-dielectric Huygens’ metasurface (ADHMS) at a near-ultraviolet (NUV) regime. The NUV-ADHMS is comprised of resonant titanium dioxide (TiO2) nanodisks, with the ultrathin thickness of the fifth wavelength. In addition, by modulating the diameter of the resonant TiO2 nanodisks, we can simultaneously excite and control both electric and magnetic dipoles, achieving a powerful wavefront engineering of the near-unity transmittance and a full range of the 2π phase coverage. Finally, we employed the NUV-ADHMS to bend a normal incident beam, demonstrating a deflection angle of 11° at a wavelength of 405 nm.",
    authors: ["Tse-An Chen", "Yu-Cheng Chou", "Tsung-Yu Huang", "Yu-Jung Lu", "Yu-Ping Kuang", "Ta-Jen Yen"],
    publishDate: "2022",
    journal: "ACS Applied Nano Materials",
    tags: [],
    url: ""
  },
  {
    id: 9,
    title: "Achieving broad absorption band and high incident angles by stochastically-distributed oblique-flat-sheet metamaterial perfect absorbers",
    abstract: "In this work, we integrated a periodic seed layer and oblique deposition method to fabricate a stochastically-distributed oblique-flat-sheet metamaterial perfect absorber (MPA). Such design could increase its absorption bandwidth and tolerance to high angle-incidence due to the fact that various oblique flat sheets offer different resonance conditions while even a single oblique flat sheet could provide different optical paths for resonance. On the other hand, a seed layer could reduce uncertainty regarding to direct oblique deposition and provide abilities to manipulate the bandwidth of the MPA. We also setup a simulation model in the aids of Visual Basic Application and examined the absorption behavior of the MPA under TM and TE oblique incidence that could achieve high absorbance under 80° and 60° incidence, respectively. Finally, in measurement, the fabricated sample owns 65% absorbance within 80–250 THz and over 90% absorbance within 250–320 THz at x-polarization normal incidence; as for the y-polarization normal incidence, we could achieve overall 70% absorbance within 80–300 THz. The measured results reveal similar tendency compared to the simulated ones.",
    authors: ["Cheng-Yu Lu", "Chin-Chien Chung", "Ta-Jen Yen", "Tsung-Yu Huang"],
    publishDate: "2021",
    journal: "Scientific Reports",
    tags: [],
    url: ""
  },
  {
    id: 10,
    title: "PVC Detection through a Hybrid SEIRA Substrate and Refractive Index Sensor Based on Metamaterial Perfect Absorbers",
    abstract: "Simultaneous surface enhanced infrared absorption (SEIRA) with Fano resonance and refractive index (RI) sensing are proposed via a split-ring-resonator-based metamaterial perfect absorber (MPA) to detect polyvinyl chloride (PVC), a commonly used polymer but one that was recently prohibited in many areas such as Europe. This bifunctional sensor could provide a label-free and qualitative PVC detection through SEIRA coupled to the vibration mode and a quantitative measurement through RI sensing. To design the MPA, the main operating frequency is targeted at 615 cm−1 for C-Cl bond of PVC. Transition from a reflectance dip to a peak, i.e., Fano resonance was observed at y polarization in both simulation and experiments, evidencing the existence of PVC. On the other hand, to test the RI sensing ability of the MPA, different RI (from 1 to 1.5) of analytes and different thicknesses (from 109 to 1050 nm) of polymethyl methacrylate (PMMA) were applied to the MPA in simulation and experiments, respectively. The simulated sensitivities are 4045 and 2361 nm/RIU for the first and third modes of the MPA, respectively, while the measured sensitivities based on PMMA are 3713 and 1694 nm/RIU. Overall, the detection limit of PVC could be down to 0.5% in experiments, which outweighs the current measurement limit of 10% through infrared absorption measurement.",
    authors: ["Chieh-Ting Lin", "Ta-Jen Yen", "Tsung-Yu Huang"],
    publishDate: "2021",
    journal: "Coatings",
    tags: [],
    url: ""
  },
  {
    id: 11,
    title: "Design of annulus-based dielectric metamaterial cloak with properties of illusion optics",
    abstract: "We propose a feasible design for an annulus-based dielectric metamaterial cloak to not only reduce Ohmic losses from metallic metamaterials but also avoid manual misalignment when utilizing discrete dielectric metamaterials. The designed cloak is authenticated by the finite-integration method, and the corresponding field distributions without and with hidden objects are found to reveal the invisibility of the cloak. In addition, illusion optics are comprehended by comparing the field distributions of the dielectric-metamaterial-cloak-based illusion-device and an illusion object. With the abovementioned characteristics of the proposed cloak using an annulus-based dielectric metamaterial, in simulation, we successfully approach the features of the reciprocal cloak, which conceals multiple objects with vision and movement.",
    authors: ["Jian-Hui Lin", "Ta-Jen Yen", "Tsung-Yu Huang"],
    publishDate: "2020",
    journal: "Journal of Optics",
    tags: [],
    url: ""
  },
  {
    id: 12,
    title: "We propose a feasible design for an annulus-based dielectric metamaterial cloak to not only reduce Ohmic losses from metallic metamaterials but also avoid manual misalignment when utilizing discrete dielectric metamaterials. The designed cloak is authenticated by the finite-integration method, and the corresponding field distributions without and with hidden objects are found to reveal the invisibility of the cloak. In addition, illusion optics are comprehended by comparing the field distributions of the dielectric-metamaterial-cloak-based illusion-device and an illusion object. With the abovementioned characteristics of the proposed cloak using an annulus-based dielectric metamaterial, in simulation, we successfully approach the features of the reciprocal cloak, which conceals multiple objects with vision and movement.",
    abstract: "Constrained by the diffraction limit, a lens can only resolve features larger than half of the incident wavelength owing to the decaying nature of evanescent waves. Several novel devices have been proposed, for example, superlenses and hyperlenses to break this limit. In this work, we present a flat hyperlens composed of silver nanowires embedded in a modified anodic aluminum oxide (AAO) template to demonstrate subwavelength imaging. Measurement conducted by the near-field scanning optical microscope at 633 nm suggests that our proposed flat hyperlens can indeed achieve sub-wavelength imaging with a resolution down to 0.34λ and 0.25λ along two orthogonal directions. Furthermore, to confirm the resolution limit of the flat hyperlens, numerical simulations were performed at the incident wavelengths of 633 and 365 nm, and the corresponding resolution were 0.19λ and 0.3λ, respectively, thus paving a route for sub-wavelength photolithography.",
    authors: ["Chung-Wei Tao", "Ta-Jen Yen", "Tsung-Yu Huang"],
    publishDate: "2020",
    journal: "Scientific Reports",
    tags: [],
    url: ""
  },
  {
    id: 13,
    title: "Experimentally approaching to reciprocal cloaks via annulus-dielectric-metamaterials",
    abstract: "Transformation optics has brought a wave of fanaticism among researchers to realize the first-ever invisible cloak over the past decade. Several relevant devices, including internal cloaks, external cloaks, and mantle cloaks, have already been proposed, with a few being experimentally demonstrated. Still, the proposed cloaks possess their insufficiencies to realize a reciprocal cloak. To better illustrate the cloak, here we report a new approach to a transformation-optics-based reciprocal cloak with designed dielectric-annulus-based metamaterials. Our results indicate we can easily control the anisotropic constitutive parameters at will. In addition, the as-fabricated cloak enables concurrent vision and movements of a hidden object, evidenced by both simulated and measured field distributions. More importantly, the cloak demands no bespoke design and is applicable to arbitrary electric-large objects. We affirm that we provide a method to developing the first-ever reciprocal cloak in experiments, and believe that the cloak could be further operated at visible ranges through the methodology we introduced, paving a route toward future applications in the fields of optics, physics, materials science, etc.",
    authors: ["Tsung-Yu Huang", "Jian-Hui Lin", "Tung Lee", "Ta-Jen Yen"],
    publishDate: "2019",
    journal: "Journal of Optics",
    tags: [],
    url: ""
  },
  {
    id: 14,
    title: "Experimental demonstration of broadband light trapping by exciting surface modes of an all-dielectric taper",
    abstract: "We design an all-dielectric taper and then excite its surface modes by illuminating a plane wave upon the taper to achieve broadband light trapping spanning from 20 to 100 GHz. Via Lewin’s theory, such excitation of surface modes could be analogous to “trapped rainbow”, i.e., activation of negative Goos-Hänchen effect within a negative refractive waveguide. To further reinforce this statement, the corresponding power flow distributions within the all-dielectric taper are recorded in finite-integration time domain simulation and suggest that a chromatic incident pulse is indeed trapped at different critical thicknesses of the taper, a character of the negative refractive waveguide. Finally, the transmittance is measured and compared to the simulated ones. The two followed the similar trend.",
    authors: ["Tsung-Yu Huang", "Ta-Jen Yen"],
    publishDate: "2019",
    journal: "Scientific Reports",
    tags: [],
    url: ""
  },
  {
    id: 15,
    title: "Demonstration of a Three-dimensional Negative Index Medium Operated at Multiple-angle Incidences by Monolithic Metallic Hemispherical Shells",
    abstract: "We design and construct a three-dimensional (3D) negative index medium (NIM) composed of gold hemispherical shells to supplant an integration of a split-ring resonator and a discrete plasmonic wire for both negative permeability and permittivity at THz gap.",
    authors: ["Ting-Tso Yeh", "Tsung-Yu Huang", "Takuo Tanaka", "Ta-Jen Yen"],
    publishDate: "2017",
    journal: "Scientific Reports",
    tags: [],
    url: ""
  },
  {
    id: 16,
    title: "Slowing light by activating an oscillatory mode in a negative refractive waveguide composed of all dielectric metamaterials",
    abstract: "",
    authors: ["Tsung-Yu Huang", "Yueh-Chun Lai", "Ta-Jen Yen"],
    publishDate: "2016",
    journal: "Applied Physics Express",
    tags: [],
    url: ""
  },
  {
    id: 17,
    title: "Experimental realization of ultrathin, double-sided metamaterial perfect absorber at terahertz gap through stochastic design process",
    abstract: "We design and demonstrate a flexible, ultrathin and double-sided metamaterial perfect absorber (MPA) at 2.39 terahertz (THz), which enables excellent light absorbance under incidences from two opposite sides. Herein, the MPA is fabricated on a λ0/10.1-thick flexible polyethylene terephthalate substrate of εr = 2.75 × (1 + 0.12i), sandwiched by two identical randomized metallic patterns by our stochastic design process. Such an MPA provides tailored permittivity and permeability to approach the impedance of free space for minimizing reflectance and a great imaginary part of the refractive index for reducing transmittance and finally results in high absorbance. Both experimental measurement and numerical simulation are in a good agreement. The flexible, ultrathin and double-sided MPA significantly differs from traditional quarter-wavelength absorbers and other single-sided perfect absorbers, paving a way toward practical THz applications in thermal emission, sensing and imaging, communications, stealth technique and even energy harvesting.",
    authors: ["Tsung-Yu Huang", "Ching-Wei Tseng", "Ting-Tso Yeh", "Tien-Tien Yen", "Chih-Wei Luo", "Tahsin Akalin", "Ta-Jen Yen"],
    publishDate: "2015",
    journal: "Scientific Reports",
    tags: [],
    url: ""
  },
  {
    id: 18,
    title: "Slowing light by exciting the fundamental degeneracy oscillatory mode in a negative refractive waveguide",
    abstract: "We construct a negative refractive waveguide (NRW) by employing an anisotropic negative refraction index medium operated at multiple incidences and then experimentally demonstrate the slowing light effect by exciting the negative Goos–Hänchen effect originating from the fundamental degeneracy oscillatory mode within the NRW. Such experimental demonstration is further confirmed by scrutinizing the distributions of E-field and power flow in simulation. Moreover, the effective indices of the NRW are retrieved by the theoretical analysis and then are affirmed by finite element simulation. The experimental result agrees with the two simulation results well and so does the theoretical analysis.",
    authors: ["Tsung-Yu Huang", "Tien-Chung Yang", "Ta-Jen Yen"],
    publishDate: "2013",
    journal: "Applied Physics Letters",
    tags: [],
    url: ""
  },
  {
    id: 19,
    title: "Ultra-broad and sharp-transition bandpass terahertz filters by hybridizing multiple resonances mode in monolithic metamaterials",
    abstract: "We present three monolithic metamaterial-based THz bandpass filters, the skewed circular slot rings, meandered slots and Jerusalem cross slots, to fit in the THz gap. These THz bandpass filters are comprised of a metal-dielectric-metal (MDM) structure that supports multiple resonances of electric dipole, magnetic dipole, and standing-wave-like modes. By exciting and further hybridizing these individual resonance modes, we demonstrate excellent performance of broad bandwidth and sharp band-edge transition beyond conventional bandpass filters. By further employing our ad hoc Genetic Algorithm (GA) and Periodic Method of Moments (PMM) to optimize our designs, we achieve an ultra-broad 3dB fractional bandwidth and sharp band-edge transition up to 82.2% and 58.3 dB/octave, respectively, benefiting the practical applications such as material recognition in security systems, imaging, and absorbers.",
    authors: ["Ting-Tso Yeh", "Simone Genovesi", "Agostino Monorchio", "Enrico Prati", "Filippo Costa", "Tsung-Yu Huang", "Ta-Jen Yen"],
    publishDate: "2012",
    journal: "Optics Express",
    tags: [],
    url: ""
  },
  {
    id: 20,
    title: "An innovative cloak enables arbitrary multi-objects hidden with visions and movements",
    abstract: "We propose an innovative cloak to enable arbitrary multi-objects hidden with visions and movements. We develop the cloak with spatially varying constitutive parameters by employing transformation optics with two-step coordinate transformations and testify the performance of the cloak by finite element based simulation software. In simulation, the electric field distributions (Ez) of the cloak for different circumstances agree with the analytical prediction well.",
    authors: ["Tsung-Yu Huang", "Hsin-Cheng Lee", "Ieng-Wai Un", "Ta-Jen Yen"],
    publishDate: "2012",
    journal: "Applied Physics Letters",
    tags: [],
    url: ""
  },
  {
    id: 21,
    title: "Mid-infrared artificial magnetism directly from magnetic field coupling",
    abstract: "Here we develop submicron L-shaped magnetic resonators with four-fold rotational symmetry to ease the burden of the orientation issue, and demonstrate a compelling artificial magnetic response up to 44.7 THz (wavelength 6.7 μm) along with the properties of scalability and broad bandwidth directly from magnetic field coupling. In addition, the stored electromagnetic energy is highly localized inside the resonators, resulting in a significant nonlinear enhancement to promise micro-quantitative analysis. We suggest that the artificial magnetism demonstrated at mid-infrared ranges will radically impact the field of infrared optics, biological and security imaging, and chemical sensing.",
    authors: ["Tsung-Yu Huang", "Chia-Yun Chen", "Ta-Jen Yen"],
    publishDate: "2011",
    journal: "Journal of Applied Physics",
    tags: [],
    url: ""
  },
  {
    id: 22,
    title: "A High-Ratio Bandwidth Square-Wave-Like Bandpass Filter by Two-Handed Metamaterials and its Application in 60 GHz Wireless Communication",
    abstract: "",
    authors: ["Tsung-Yu Huang", "Ta-Jen Yen"],
    publishDate: "2011",
    journal: "Progress In Electromagnetics Research Letters",
    tags: [],
    url: ""
  }
]; 

export const LATEST_PUBLICATIONS = MOCK_PUBLICATIONS.slice(0, 5);