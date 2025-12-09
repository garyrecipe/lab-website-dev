export const EQUIPMENT_LIST = [
  {
    name: 'Scanning Electron Microscope (SEM)',
    image: './images/equipment/e1.jpg',
    purpose: 'Used for observing material surface morphology and microstructure, providing high-resolution surface morphology images. Equipped with Energy Dispersive X-ray Spectroscopy (EDS) for elemental analysis.',
    features: [
      'Material Analysis',
      'Surface Morphology',
      'Elemental Analysis',
    ],
    spec: 'Manufacturer/Model: Jeol JSM 6390\nAcceleration Voltage: 10 – 30 keV\nMagnification: Up to 50,000x\nOthers: Equipped with liquid nitrogen-cooled Energy Dispersive Spectrometer (Oxford Instrument INCA x-Sight 7582)',
    manager: 'Lu, Cheng-Yu',
    contact: 'U03187112@gmail.com'
  },
  {
    name: 'Electron Beam Lithography System',
    image: './images/equipment/e2.jpg',
    purpose: 'Uses high-energy electron beams to precisely form micron or nanometer-scale patterns on material surfaces for manufacturing various micro and nano structures.',
    features: [
      'Material Processing',
      'Microstructure Writing',
      'Positive/Negative Resist'
    ],
    spec: 'Manufacturer/Model: Raith Elphy Quantum\nResist: PMMA 950K A1~A7, PMMA 495K A1~A7, LOR 5B positive resists, and SU8 2000.5 negative resist.\nMaximum Writing Area: 1,000 mm²\nMaximum Lift-off Thickness: Up to 200 nm with dual resist process\nMinimum Feature Size: 100 nm\nOthers: Can perform microstructure writing on conductor or non-conductor substrates.',
    manager: 'Lu, Cheng-Yu',
    contact: 'U03187112@gmail.com'
  },
  {
    name: 'High Vacuum Thermal Evaporation System',
    image: './images/equipment/e3.jpg',
    purpose: 'By applying voltage, the resistor generates heat and heats the tungsten boat and target material. The coating material vaporizes and deposits on the substrate above.',
    features: [
      'Material Processing',
      'Thermal Evaporation',
      'Thin Film Deposition'
    ],
    spec: 'Manufacturer/Model: Custom System\nNumber of Evaporation Sources: Four evaporation sources\nHeating Current: Up to 100 Amperes\nSubstrate Size: 25 cm diameter (3x3 cm² center area cannot place samples)\nSubstrate Rotation Speed: Up to 60 rpm\nOthers: Currently calibrated for material thickness including silver, chromium, magnesium fluoride, indium tin oxide, nickel, iron, cobalt, gold, and aluminum.',
    manager: 'Hsu, Hung-Yi',
    contact: '7506'
  },
  {
    name: 'Ion-Assisted Electron Gun Evaporation System',
    image: './images/equipment/e4.jpg',
    purpose: 'Uses magnetic field to guide hot electrons to bombard the target material in the crucible, causing the target material to heat up and vaporize, depositing on the substrate above. Additionally, with the ion gun, the introduced gas can be plasmaized and guided to bombard the sample, forming dense thin films.',
    features: [
      'Material Processing',
      'Electron Beam Evaporation',
      'Ion Assistance',
      'Thin Film Deposition'
    ],
    spec: 'Manufacturer/Model: Ion-Assisted Electron Gun Evaporation System\nNumber of Crucible Slots: Three crucible slots\nElectron Gun Maximum Power: Telemark model 880 control module with Telemark tt-15 power supply, maximum power up to 15kW\nIon Gun: CKII controller, anode maximum output voltage DC 200 V, anode maximum output current 5 Amperes\nIntroduced Gases: Oxygen, nitrogen, and argon gases\nOthers: Metals and metal oxides including aluminum, copper, gold, hafnium, magnesium, silicon, silver, zinc, and tin',
    manager: 'Hsiang, Pin-Yao',
    contact: 'M1324004@cgu.edu.tw'
  },
  {
    name: 'Three-Gun Unbalanced Magnetron Sputtering System',
    image: './images/equipment/e5.jpg',
    purpose: 'Uses DC or RF power sources with magnetic field to form plasma from inert gas, and uses electric field to guide plasma to bombard targets. Target atoms are sputtered and deposited on substrates, forming uniform thin films.',
    features: [
      'Material Processing',
      'Sputtering',
      'Plasma-Assisted',
      'Thin Film Deposition'
    ],
    spec: 'Manufacturer/Model: Three-Gun Unbalanced Magnetron Sputtering System\nSubstrate Diameter: 4 inches\nSubstrate Temperature: Up to 850 ℃\nPower Sources: Two DC and two RF power sources\nTarget Holders: Three 2-inch targets\nIntroduced Gases: Oxygen, hydrogen, and nitrogen\nOthers: Currently have titanium, indium tin oxide, and copper targets',
    manager: 'Liu, Chun-Wei',
    contact: '7506'
  },
  {
    name: '3D Printer',
    image: './images/equipment/e6.jpg',
    purpose: 'Uses photosensitive resin to print various three-dimensional structures.',
    features: [
      'Material Processing',
      'Photocuring',
      '3D Printing'
    ],
    spec: 'Manufacturer/Model: Sonic Mighty Revo 8K\nPrint Size: L 22.3 x W 12.6 x H 23.5 cm\nResolution: XY plane 16.8 x 24.8 µm, z-axis resolution 0.01-0.30 mm.',
    manager: 'Chan, Tzu-Hsuan',
    contact: 'Mobile'
  },
  {
    name: 'Rapid Thermal Annealing Furnace',
    image: './images/equipment/e7.jpg',
    purpose: 'Uses high-power heat sources (such as halogen infrared lamps) to rapidly and precisely control the heating and cooling process of samples, significantly reducing processing time compared to traditional annealing.',
    features: [
      'Material Processing',
      'Annealing',
    ],
    spec: 'Manufacturer/Model: R-401\nHeating Area: Four-zone heating design, total 150X150 mm²\nSample Size: Fragments to 4-inch wafers\nHeating Rate: 1-1,000 ℃/sec\nMaximum Operating Temperature: 1,000 ℃\nAvailable Gases: Compressed dry air, nitrogen, argon, and oxygen',
    manager: 'Hsiang, Pin-Yao',
    contact: 'M1324004@cgu.edu.tw'
  },
  {
    name: 'Fourier Transform Infrared Spectrometer',
    image: './images/equipment/e8.jpg',
    purpose: 'Uses infrared light source to irradiate samples, confirming molecular structure and chemical composition of materials or compounds, determining if samples are known substances.',
    features: [
      'Material Analysis',
      'Functional Group Absorption',
      'Optical Properties'
    ],
    spec: 'Manufacturer/Model: /PerkinElmer Spectrum\nModules: Transmission and Attenuated Total Reflection modules\nMeasurement Range: 4000 – 400 cm-1 (transmission module) and 4000 – 650 cm-1 (ATR module)\nResolution: 4 cm-1',
    manager: 'Chen, Kuan-Wen',
    contact: ''
  },
  {
    name: 'X-ray Diffractometer',
    image: './images/equipment/e9.jpg',
    purpose: 'Uses interaction between X-rays and crystal structures to generate diffraction peaks, and analyzes diffraction planes to obtain information about crystal structure, phase composition, orientation, defects, or grain size of materials.',
    features: [
      'Material Analysis',
      'Crystal Structure',
      'Grain Size'
    ],
    spec: 'Manufacturer/Model: Rigaku/\nModules: Thin film, powder, heating, and residual stress analysis modules\nMeasurement Range: In thin film mode, receiver angle range 0°~ 120°; in thin film grazing incidence mode, emitter angle range 0°~ 5°, receiver angle range 0°~ 125°. In powder diffraction mode, receiver angle 0°-135°.\nHeating Range: Up to 1,300 °C\nStage Rotation Range: Vertical rotation -5°~90° and horizontal rotation 360°',
    manager: 'Hsiang, Pin-Yao',
    contact: 'M1324004@cgu.edu.tw'
  },
  {
    name: 'Field Emission Scanning Electron Microscope',
    image: './images/equipment/e10.jpg',
    purpose: 'Used for observing material surface morphology and microstructure, providing high-resolution surface morphology images. Equipped with Energy Dispersive X-ray Spectroscopy (EDS) for elemental analysis.',
    features: [
      'Material Analysis',
      'Surface Morphology',
      'Elemental Analysis'
    ],
    spec: 'Manufacturer/Model: Joel JSM-IT700HR\nAcceleration Voltage: Up to 15 keV\nResolution: Up to 1 nm\nProbe Current: Up to 300 nA\nOthers: Equipped with silicon drift energy dispersive X-ray spectrometer',
    manager: 'Chan, Tzu-Hsuan',
    contact: ''
  },
  {
    name: 'Atomic Force Microscope',
    image: './images/equipment/e11.jpg',
    purpose: 'Uses interaction forces between probe and sample atoms to scan sample surfaces to obtain high-resolution three-dimensional surface morphology images, achieving atomic-level resolution.',
    features: [
      'Material Analysis',
      'Surface Morphology',
      'Thin Film Thickness'
      ],
    spec: 'Manufacturer/Model: Bruker/ \nModules: Contact, tapping, and conductive material modules\nModes: General, liquid, and small-range scanning modes\nScan Range: Maximum 90X90 µm² in plane, height up to 10 µm\nResolution: 512X512 pixel resolution',
    manager: 'Chung, Wei-Hsiang',
    contact: ''
  },
  {
    name: 'Reactive Ion Etching System',
    image: './images/equipment/e12.jpg',
    purpose: 'Reactive ion etching is a dry etching technique that simultaneously uses chemical reactions and physical bombardment to selectively remove materials. It can create high aspect ratio and anisotropic structures, making it very important in semiconductor processes, micro-nano manufacturing, and MEMS.',
    features: [
      'Material Processing',
      'Surface Modification'
    ],
    spec: 'Manufacturer/Model: Custom System\nMaximum Power: 600 W\nMaximum Flow Rate: 100 sccm\nAvailable Gases: Has four flow channels, currently available gases are oxygen, hydrogen, argon, and nitrogen\nSample Area: Maximum 226 cm²',
    manager: 'Chin, Jung-Chun',
    contact: 'M14188014@o365.mcut.edu.tw'
  },
  {
    name: 'Potentiostat',
    image: './images/equipment/e13.jpg',
    purpose: 'Maintains electrode at constant potential, measuring relationship between current and time or potential, used for electrochemical analysis and corrosion research.',
    features: [
      'Material Processing',
      'Material Analysis',
      'Electrochemical Properties'
    ],
    spec: 'Manufacturer/Model: \nVoltage Range: ± 10 V, resolution 5 µV within 200 mV\nCurrent Range: 1 A to 10 µA with resolution 0.760 nA.',
    manager: 'Chung, Wei-Hsiang',
    contact: ''
  },
  {
    name: 'Raman Spectrometer',
    image: './images/equipment/e14.jpg',
    purpose: 'Used to analyze molecular vibration and chemical bond information of materials, can identify chemical composition of materials, and can non-destructively evaluate stress/strain, crystallinity, and defects. Complementary to infrared absorption spectroscopy.',
    features: [
      'Material Analysis',
      'Raman Shift',
      'Optical Properties'
    ],
    spec: 'Manufacturer/Model: \nLight Source Specifications: Red laser with 17 mW power (wavelength 633 nm) and green laser with 25 – 200 mW power (wavelength 532 nm) two light sources.\nObjective Magnification: 10x, 50x, and 100x objectives\nResolution:',
    manager: 'Hu, Jen-Chu',
    contact: ''
  },
  {
    name: 'Surface Profilometer',
    image: './images/equipment/e15.jpg',
    purpose: 'Can be used to measure parameters such as surface flatness, roughness, or thin film thickness of materials.',
    features: [
      'Material Analysis',
      'Thin Film Thickness'
    ],
    spec: 'Manufacturer/Model: /\nProbe: Diamond tip with tip radius of approximately 2 µm\nMode: 10 to 500 µN\nZ-axis Measurement Range: Maximum 600 µm\nZ-axis Resolution: Up to 0.1 nm',
    manager: 'Lu, Cheng-Yu',
    contact: 'U03187112@gmail.com'
  },
  {
    name: 'UV-Vis Spectrophotometer',
    image: './images/equipment/e16.jpg',
    purpose: 'UV-Vis spectrophotometer determines the bandgap of materials by irradiating samples with light of different wavelengths and analyzing the transmission, reflection, and absorption of the irradiated materials.',
    features: [
      'Material Analysis',
      'Optical Properties'
    ],
    spec: 'Manufacturer/Model: /\nWavelength Range: 190 to 2700 nm\nModules: Thin film, aqueous solution, and integrating sphere\nSample Size: Not exceeding 2 x 2 cm².',
    manager: 'Hsiang, Pin-Yao',
    contact: 'M1324004@cgu.edu.tw'
  },
  // Can add more items based on actual equipment
]; 

export const SOFTWARE_LIST = [
  {
    name: 'COMSOL MultiPhysics',
    image: './images/equipment/e20.jpg',
    purpose: 'COMSOL Multiphysics is a numerical simulation software renowned for its multi-physics coupling capabilities. Its greatest feature is the ability to simultaneously handle multiple physical fields such as structural, thermal, electromagnetic, fluid, or chemical in a single platform. Its graphical interface is intuitive, allowing complex models to be built through modular settings, and also supports user-defined equations, making it suitable for innovative research designs. COMSOL uses the Finite Element Method (FEM) as its main solving approach, providing high-precision mesh control and stable solvers, and can integrate with MATLAB for advanced computations. It is one of the most widely used tools in cross-disciplinary engineering simulation.',
    features: [
      'Numerical'
    ],
    spec: '',
    manager: '',
    contact: ''
  },
  {
    name: 'STR Virtue Reactor SiC',
    image: './images/equipment/e17.jpg',
    purpose: 'STR Virtue Reactor SiC is a TCAD software platform designed specifically for silicon carbide (SiC) crystal growth and process simulation. It can simulate heat transfer, flow fields, gas-phase reactions, sublimation, and crystal growth kinetics in SiC processes such as PVT and CVD. Its feature is providing a highly integrated multi-physics calculation environment that can accurately predict temperature distribution, thermal gradients, growth rates, and defect generation. The system supports multi-dimensional geometric modeling and uses the Finite Volume Method (FVM) as the main solving approach, making it suitable for furnace design optimization and process parameter analysis. It has important value for SiC crystal growth equipment development, material quality improvement, and academic research.',
    features: [
      'Numerical Simulation',
      'Finite Volume Method'
    ],
    spec: '',
    manager: '',
    contact: ''
  },
  {
    name: 'CST Microwave Studio',
    image: './images/equipment/e18.jpg',
    purpose: 'CST Microwave Studio is a 3D full-wave analysis software specialized for electromagnetic field simulation, particularly suitable for antenna, microwave component, transmission line, and high-frequency circuit design. Its feature is providing multiple solvers, including time domain, frequency domain, eigenmode, and integral equation methods, allowing selection of the most effective calculation method based on different structures, improving accuracy and efficiency. CST features an intuitive modeling interface, fast mesh generation, and powerful post-processing functions, visualizing electric fields, magnetic fields, S-parameters, and far-field radiation patterns. Widely applied in 5G, millimeter wave, radar, and high-speed signal integrity analysis.',
    features: [
      'Numerical Simulation',
      'Finite Integration Technique'
    ],
    spec: '',
    manager: '',
    contact: ''
  },
  {
    name: 'Lumerical FDTD',
    image: './images/equipment/e19.jpg',
    purpose: 'Lumerical FDTD is an optical electromagnetic simulation software with Finite-Difference Time-Domain (FDTD) method at its core, specifically designed for analyzing nanophotonic components such as optical waveguides, microring resonators, metallic nanostructures, and metamaterials. Its feature is the ability to accurately simulate scattering, interference, coupling, and absorption behaviors of light at the nanoscale, and supports material dispersion, nonlinear effects, and pulsed light sources. The software provides efficient cloud and GPU-accelerated computing, and features an intuitive modeling interface and comprehensive visualization analysis tools, allowing access to field distributions, spectra, and Q-factor data. It is one of the mainstream tools for photonic crystal and silicon photonics research.',
    features: [
      'Numerical Simulation',
      'Finite-Difference Time-Domain'
    ],
    spec: '',
    manager: '',
    contact: ''
  }
]
