export const EQUIPMENT_LIST = [
  {
    name: '掃描式電子顯微鏡',
    image: '',
    purpose: '用於觀察材料表面形貌和微觀結構，可提供高解析度的表面形貌圖像。',
    features: [
      '高解析度成像能力',
      '可進行元素分析',
      '樣品製備簡單',
      '適用於導電和非導電樣品'
    ],
    spec: '加速電壓可設置10eV~30eV，根據導電率的高低，其影像解析度可高至1萬至5萬倍。'
  },
  {
    name: '電子束微影系統',
    image: '',
    purpose: '利用高能量電子束，精確地在材料表面形成微米或奈米級的圖案，以用於製造各種微米和奈米結構。',
    features: [
      '奈米結構圖形寫入',
      '精細圖案製作',
      '正負光阻使用'
    ],
    spec: '寫入區域可達200 µm²，線寬可低至100 nm，利用雙光阻製程可大大提升掀離成功率，使圖形厚度可增至200nm以下。'
  },
  {
    name: '熱蒸鍍機台',
    image: './images/equipment/e5.jpg',
    purpose: '運用電阻加熱將鍍膜材料加熱並使其蒸發，進行鍍膜。',
    features: [
      '熱擴散',
      '真空製程',
      '奈米薄膜製作'
    ],
    spec: '具有四組蒸發源，電壓可以施加到150安培以上，當前已有Ag、Cr、MgF、ITO、Ni、Fe、CO、Au、Al的參數'
  },
  {
    name: '離子輔助電子槍蒸鍍系統',
    image: './images/equipment/e6.jpg',
    purpose: '運用電子束將鍍膜材料(如金屬Al、Cu)加熱並使其蒸發，並搭配獨立離子源輔助沉積，進行鍍膜。',
    features: [
      '熱蒸鍍製程',
      '真空製程',
      '電漿輔助系統',
      '奈米級薄膜製作'
    ],
    spec: '腔體大小 : 660 x  590 x 890 mm / 津弘科技 / 內部含有4個坩鍋放置區\n電子束蒸鍍機 : 控制模組 / telemark model 880；電源供應器 /  telemark tt-15 / 最大功率可達15kW / 可蒸鍍Al、Cu、Au、Hf、Mg、Si、Ag、Zn和Sn等金屬和其氧化物\n離子束 : 立兆鑫科技 / CKII 控制器 / 陽極電壓(Anode Voltage)最大輸出電壓為200 VDC / 陽極電流(Anode Current)最大輸出電流為5 Amp'
  },
  {
    name: '濺鍍系統',
    image: '',
    purpose: '',
    features: [],
    spec: ''
  },
  {
    name: '3D列印機台',
    image: './images/equipment/e8.jpg',
    purpose: '印製出COMSOL所模擬的模型，或者是其他.stl檔的影印檔。',
    features: [
      '模型列印',
      '光固化3D列印',
      '批量製程'
    ],
    spec: '機台廠商:普羅森/列印尺寸 L22.3 x W12.6 x H23.5 cm/XY 解析度 16.8 x 24.8 µm/切層厚度 0.01-0.30 mm'
  },
  {
    name: '快速退火爐',
    image: './images/equipment/e9.jpg',
    purpose: '利用鹵素紅外燈等熱源，在短時間內將材料快速加熱到特定溫度，以消除材料內部缺陷，改善其性能。 ',
    features: [
      '半導體製程',
      '材料缺陷修復',
      '材料相變化'
    ],
    spec: '森積科技 / R-401 / 適用4吋以下的矽基板 / 最高加熱溫度1000℃'
  },
  {
    name: '傅立葉紅外線光譜儀',
    image: '',
    purpose: '利用紅外光源照射樣品，確認材料或化合物的分子結構與化學組成，判斷樣品是否為某種已知物質。',
    features: [
      '官能基辨識',
      '化學結構',
      'IR吸收峰'
    ],
    spec: ''
  },
  {
    name: 'X光繞射儀',
    image: './images/equipment/e11.jpg',
    purpose: '利用X射線與晶體結構的交互作用，通過分析繞射圖譜來獲取材料的晶體結構、相組成、取向等信息。',
    features: [
      '檢測晶體結構',
      '元素組成',
      '晶粒尺寸',
      '相組成'
    ],
    spec: '機台廠商Rigaku / 可量測Thin film and Powder模式 / 量測角度(入射端低掠角模式、接收端角度0-100 °) / 包含加熱模組至1300 °C / 旋轉試片載台(垂直-5 °~90 °、水平360  °) / 試片殘留應力分析模組'
  },
  {
    name: '場發掃描電子顯微鏡與能量色散光譜儀',
    image: './images/equipment/e12.jpg',
    purpose: 'FE-SEM用於觀察樣品的結構與形貌，可以提供高解析度的表面形貌圖像，而EDS可以分析特定區域的元素組成。',
    features: [
      '高解析影像',
      '非破壞性分析',
      '元素定性定量',
      '區域選擇分析',
      '同步成像與分析'
    ],
    spec: '機台廠商JEOL/JEOL JSM-IT700HR/ 高解析度（1 nm）/高探針電流（300 nA）/自動化功能/結合EDS模組'
  },
  {
    name: '原子力顯微鏡',
    image: '',
    purpose: '',
    features: [],
    spec: ''
  },
  {
    name: '反應式離子蝕刻機台',
    image: '',
    purpose: '',
    features: [],
    spec: ''
  }
  // 可以根據實際設備繼續添加更多項目
]; 