// 研究大綱
export const RESEARCH_OVERVIEW = {
  title: "研究大綱",
  description: `本實驗室致力於超材料(Metamaterials)的設計、製造與應用研究。我們專注於開發具有特殊物理性質的人工結構材料，
    這些材料可以實現自然界中難以找到的特性。我們的研究涵蓋了從理論設計、數值模擬到實際製造和性能測試的完整流程。`,
  image: "https://placehold.co/1200x600",
  imageCaption: "超材料研究領域概覽"
};

// 詳細研究主題
export const RESEARCH_TOPICS = [
  {
    id: 1,
    title: "奈米雷射",
    description: "使用COMSOL模擬軟體，設計能夠使表面電漿子在次波長的尺度下達到三維侷限的結構。接著使用Lumerical模擬軟體，對雷射激發的表現進行分析。在製程部分，透過離子輔助蒸鍍以及FIB製程，驗證模擬結果。",
    keyPoints: [
      "表面電漿奈米雷射",
      "表面電漿共振",
      "雙曲超介面",
      "電驅動"
    ],
    image: "./images/research/r1.jpg",
    imageCaption: ""
  },
  {
    id: 2,
    title: "聲學超材料",
    description: "使用 COMSOL 模擬軟體對設計完成的聲學結構進行吸收性能模擬，透過分析模擬結果（例如吸收峰值與聲壓分布）來調整結構參數，以優化其聲學表現。當模擬結果達到最佳化後，利用 3D 列印技術製作實體樣品，並將其放置於阻抗管中進行實驗量測，以評估實際的聲音吸收效果。",
    keyPoints: [
      "聲學超材料",
      "噪音吸收",
      "雙向吸音"
    ],
    image: "./images/research/r2.jpg",
    imageCaption: ""
  },
  {
    id: 3,
    title: "碳化矽長晶模擬",
    description: "將碳化矽生長腔繪製於STR模擬軟件中，並設定材料參數後進行晶體生長模擬，透過模擬的結果與實際實驗交互比照，接著在模擬中修改出優化構型，達成優化碳化矽晶體生長。",
    keyPoints: [
      "有限差分時域模擬",
      "碳化矽長晶優化",
      "物理氣相沉積法"
    ],
    image: "./images/research/r3.jpg",
    imageCaption: ""
  },
  {
    id: 4,
    title: "斜向線超材料完美吸收體的各項應用",
    description: "利用電子束微影結合斜向蒸鍍製程製備斜向線超材料完美吸收體試片，可用於電磁波吸收、感測器等用途。",
    keyPoints: [
      "斜向蒸鍍技術",
      "超材料吸收體",
      "寬頻大角度吸收"
    ],
    image: "./images/research/r4.jpg",
    imageCaption: ""
  },
  {
    id: 5,
    title: "P type SnO鍍膜",
    description: "運用離子輔助蒸鍍設備沉積具有 P-type 特性的 SnO 薄膜，將其製成 EIS 結構的電子元件，搭配 Cool LED 的光源照射，使其能夠針對光源的照射範圍產生變化，達到感應檢測的效果。",
    keyPoints: [
      "離子輔助蒸鍍技術",
      "電洞型氧化物半導體",
      "光定址電位感測器"
    ],
    image: "./images/research/r5.jpg",
    imageCaption: ""
  },
  {
    id: 6,
    title: "機器學習以及其各式應用",
    description: "本研究運用 MATLAB 內建的 卷積神經網路（CNN）架構，收集與分析電子廢棄物相關數據。透過將完整數據集輸入至 CNN 進行訓練與優化，最終建立出準確率高、效能優異的分類模型，並成功應用於電子廢棄物資料庫中。",
    keyPoints: [
      "卷積神經網路(CNN)",
      "機器學習"
    ],
    image: "./images/research/r6.jpg",
    imageCaption: ""
  },
  {
    id: 7,
    title: "數值模擬及各領域的模擬",
    description: "",
    keyPoints: [
    ],
    image: "https://placehold.co/800x600",
    imageCaption: ""
  },
  {
    id: 8,
    title: "電化學製備智慧窗戶",
    description: "使用CST與COMSOL模擬軟體觀測製程參數，在使用奈米球微影製程進行透明電極的製作，並在最後達成電致變色的智慧窗戶。",
    keyPoints: [
      "奈米球微影",
      "電化學",
      "智慧窗戶",
      "透明電極"
    ],
    image: "./images/research/r8.jpg",
    imageCaption: ""
  },
  {
    id: 9,
    title: "電子束微影系統",
    description: "利用塗佈光阻、電子束系統曝光、顯影、蒸鍍、掀離等一連串步驟，進行奈米級微小尺寸圖形製備。",
    keyPoints: [
      "奈米結構",
      "微影製程",
      "雙光阻製程優化"
    ],
    image: "./images/research/r9.jpg",
    imageCaption: ""
  },
  {
    id: 10,
    title: "鋰金屬電池裡奈米球微影應用",
    description: "使用奈米球微影在銅箔上做出圖形，觀察鋰離子在銅箔上沉積的形貌",
    keyPoints: [
      "奈米球微影",
      "鋰沉積枝晶狀優化"
    ],
    image: "./images/research/r10.jpg",
    imageCaption: ""
  }
]; 