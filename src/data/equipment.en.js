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
    purpose: 'Uses electron beam to heat and evaporate coating materials (such as metals Al, Cu), combined with independent ion source assistance for deposition.',
    features: [
      'Thermal Evaporation Process',
      'Vacuum Process',
      'Plasma-Assisted System',
      'Nanoscale Thin Film Fabrication'
    ],
    spec: 'Chamber Size: 660 x 590 x 890 mm / Contains 4 crucible placement areas\nElectron Beam Evaporator: Control Module / Telemark Model 880; Power Supply / Telemark TT-15 / Maximum Power: 15kW / Can evaporate Al, Cu, Au, Hf, Mg, Si, Ag, Zn, Sn and their oxides\nIon Beam: CKII Controller / Anode Voltage Maximum Output: 200 VDC / Anode Current Maximum Output: 5 Amp'
  },
  {
    name: 'Three-Gun Unbalanced Magnetron Sputtering System',
    image: './images/equipment/e5.jpg',
    purpose: 'Uses DC and RF power sources to generate plasma, bombarding targets to uniformly deposit materials on substrate surfaces.',
    features: [
      'Three-Target Simultaneous Deposition',
      'Multilayer or Alloy Thin Film Fabrication',
      'High Deposition Uniformity'
    ],
    spec: 'Manufacturer: 4-inch substrate / 2-inch targets / Two DC and RF power sources each / Maximum heating temperature: 850 ℃'
  },
  {
    name: '3D Printer',
    image: './images/equipment/e6.jpg',
    purpose: 'Prints models simulated by COMSOL or other .stl files.',
    features: [
      'Model Printing',
      'SLA 3D Printing',
      'Batch Processing'
    ],
    spec: 'Manufacturer: Print Size L22.3 x W12.6 x H23.5 cm / XY Resolution 16.8 x 24.8 µm / Layer Thickness 0.01-0.30 mm'
  },
  {
    name: 'Rapid Thermal Annealing Furnace',
    image: './images/equipment/e7.jpg',
    purpose: 'Uses halogen infrared lamps and other heat sources to rapidly heat materials to specific temperatures in a short time to eliminate internal defects and improve performance.',
    features: [
      'Semiconductor Process',
      'Material Defect Repair',
      'Material Phase Transformation'
    ],
    spec: 'Model: R-401 / Suitable for silicon substrates up to 4 inches / Maximum heating temperature: 1000℃'
  },
  {
    name: 'Fourier Transform Infrared Spectrometer',
    image: './images/equipment/e8.jpg',
    purpose: 'Uses infrared light source to irradiate samples, confirming molecular structure and chemical composition of materials or compounds, determining if samples are known substances.',
    features: [
      'Functional Group Identification',
      'Chemical Structure',
      'IR Absorption Peaks'
    ],
    spec: 'Brand/Model: PerkinElmer Spectrum Two / Module Configuration: Two interchangeable modules, Transmission module and Attenuated Total Reflection (ATR) module, can be switched according to sample properties and requirements.'
  },
  {
    name: 'X-ray Diffractometer',
    image: './images/equipment/e9.jpg',
    purpose: 'Uses interaction between X-rays and crystal structures, analyzing diffraction patterns to obtain information about crystal structure, phase composition, orientation, etc.',
    features: [
      'Crystal Structure Detection',
      'Elemental Composition',
      'Grain Size',
      'Phase Composition'
    ],
    spec: 'Manufacturer: Rigaku / Can measure Thin film and Powder modes / Measurement angles (grazing incidence mode, receiver angle 0-100°) / Includes heating module up to 1300°C / Rotating sample stage (vertical -5°~90°, horizontal 360°) / Sample residual stress analysis module'
  },
  {
    name: 'Field Emission Scanning Electron Microscope and Energy Dispersive Spectrometer',
    image: './images/equipment/e10.jpg',
    purpose: 'FE-SEM is used to observe sample structure and morphology, providing high-resolution surface morphology images, while EDS can analyze elemental composition of specific regions.',
    features: [
      'High-Resolution Imaging',
      'Non-Destructive Analysis',
      'Elemental Qualitative and Quantitative Analysis',
      'Regional Selective Analysis',
      'Simultaneous Imaging and Analysis'
    ],
    spec: 'Manufacturer: JEOL/JEOL JSM-IT700HR / High Resolution (1 nm) / High Probe Current (300 nA) / Automation Features / Combined EDS Module'
  },
  {
    name: 'Atomic Force Microscope',
    image: './images/equipment/e11.jpg',
    purpose: 'Uses interatomic interaction forces to scan sample surfaces to obtain high-resolution three-dimensional surface morphology images, achieving atomic-level resolution.',
    features: [
      'Atomic-Level Resolution',
      'Non-Destructive Detection',
      'Three-Dimensional Surface Morphology',
      'Multiple Scanning Modes',
      'Nanoscale Measurement'
    ],
    spec: 'Manufacturer: BRUKER / Scan Range: 90x90 μm Height 10 μm / Maximum Resolution 512x512 pixels / Sample Flexibility: Tip Scanner'
  },
  {
    name: 'Reactive Ion Etching System',
    image: './images/equipment/e12.jpg',
    purpose: 'Uses RF electric field to excite plasma in low-pressure gas, positive ions in plasma accelerate vertically under electric field to impact sample surface, causing etching.',
    features: [
      'Chemical-Physical Composite Etching',
      'Dry Etching',
      'Surface Modification',
      'Nanostructure Fabrication',
      'Material Selective Etching'
    ],
    spec: 'Manufacturer: Available gases O2 H2 Ar N2 / Maximum Power: 600W / Maximum Gas Flow Rate: 100 SCCM / Maximum Area: 226 cm²'
  },
  {
    name: 'Potentiostat',
    image: './images/equipment/e13.jpg',
    purpose: 'Maintains electrode at constant potential, measuring relationship between current and time or potential, used for electrochemical analysis and corrosion research.',
    features: [
      'Electrochemical Analysis',
      'Corrosion Testing',
      'Cyclic Voltammetry',
      'Impedance Analysis',
      'Real-Time Monitoring'
    ],
    spec: 'Manufacturer: Voltage: Control Voltage: ± 10V Resolution: 5 µV within 200 mV Compliance: ± 10V. Current: Current Range: 1 A to 10 µA Maximum Current: ± 1A Resolution: 0.760 nA. EIS: Frequency Range: 1 MHz to 10 µHz'
  },
  {
    name: 'Raman Spectrometer',
    image: './images/equipment/e14.jpg',
    purpose: 'Used to analyze molecular vibration and chemical bond information of materials, can identify phases and chemical composition, and can non-destructively evaluate stress/strain, crystallinity, and defects.',
    features: [
      'Non-Destructive Detection',
      'Multi-Material Applicable',
      'Rapid Material Identification'
    ],
    spec: 'Manufacturer: Laser Wavelength: 633nm (17mW), 532nm (25mW ~ 200mW) / Objectives: 10x, 50x (Long Focus: suitable for thin films, bulk materials), 50x (Short Focus: suitable for powders, liquids), 100x / Detector: CCD Detector / Measurement Range:'
  }
];

