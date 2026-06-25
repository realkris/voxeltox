const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: [1280, 720],
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  autoFirstPage: false,
});

const output = path.join(__dirname, '..', 'VoxelTox_Pitch_Deck.pdf');
doc.pipe(fs.createWriteStream(output));

const COLORS = {
  bg: '#09090b',
  bgLight: '#18181b',
  white: '#fafafa',
  muted: '#a1a1aa',
  accent: '#0ea5e9',
  accentGreen: '#10b981',
  border: '#27272a',
};

function drawBg(doc) {
  doc.rect(0, 0, 1280, 720).fill(COLORS.bg);
}

function addSlide(drawFn) {
  doc.addPage();
  drawBg(doc);
  drawFn(doc);
}

// --- SLIDE 1: Title ---
addSlide((d) => {
  d.rect(0, 0, 1280, 720).fill(COLORS.bg);
  d.fontSize(14).fillColor(COLORS.accent).text('VOXELTOX AI', 80, 60);
  d.fontSize(56).fillColor(COLORS.white).text('Predicting Molecular\nReality in 4D', 80, 220, { width: 900 });
  d.fontSize(22).fillColor(COLORS.muted).text(
    'The first World Model + LLM fusion platform for\n4D dynamic drug discovery.',
    80, 380, { width: 700 }
  );
  d.fontSize(14).fillColor(COLORS.accent).text('voxeltox.space', 80, 480);
  d.fontSize(13).fillColor(COLORS.muted).text('Seed Round  |  $3M–$5M  |  2026', 80, 510);
  d.fontSize(11).fillColor('#52525b').text('CONFIDENTIAL', 80, 660);
});

// --- SLIDE 2: Problem ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accent).text('THE PROBLEM', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('Drug Discovery Is Broken', 80, 100);
  d.fontSize(16).fillColor(COLORS.muted).text(
    'Current AI-driven drug discovery relies on static predictions that cannot\ncapture the dynamic reality of molecular interactions.',
    80, 170, { width: 900 }
  );

  const problems = [
    { title: 'Static Predictions', desc: 'AlphaFold predicts frozen snapshots.\nReal binding is dynamic and temporal.' },
    { title: 'Computational Bottleneck', desc: 'Molecular Dynamics takes days-weeks\nfor microsecond simulations. Cannot scale.' },
    { title: 'Data Silos', desc: '1D/2D/3D/4D biological data lacks\na unified fusion architecture.' },
  ];

  problems.forEach((p, i) => {
    const x = 80 + i * 380;
    const y = 300;
    d.roundedRect(x, y, 350, 200, 8).lineWidth(1).strokeColor(COLORS.border).stroke();
    d.fontSize(18).fillColor(COLORS.white).text(p.title, x + 24, y + 30, { width: 300 });
    d.fontSize(13).fillColor(COLORS.muted).text(p.desc, x + 24, y + 70, { width: 300 });
  });

  d.fontSize(28).fillColor(COLORS.white).text('$2.6B', 80, 580);
  d.fontSize(12).fillColor(COLORS.muted).text('avg cost per drug', 80, 620);
  d.fontSize(28).fillColor(COLORS.white).text('>90%', 380, 580);
  d.fontSize(12).fillColor(COLORS.muted).text('clinical trial failure rate', 380, 620);
  d.fontSize(28).fillColor(COLORS.white).text('$70B+', 680, 580);
  d.fontSize(12).fillColor(COLORS.muted).text('market size by 2030', 680, 620);
});

// --- SLIDE 3: Solution ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accentGreen).text('OUR SOLUTION', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('VoxelTox Platform', 80, 100);
  d.fontSize(16).fillColor(COLORS.muted).text(
    'World Model + LLM fusion for 4D dynamic deterministic prediction.\n10,000x faster than traditional molecular dynamics.',
    80, 170, { width: 900 }
  );

  const points = [
    { title: '4D Occupancy Forecasting', desc: 'Predict WHERE atoms will be over time — not HOW they got there. Replaces trajectory integration.' },
    { title: 'Bi-directional Self-Correction', desc: 'LLM proposes candidates, World Model validates in virtual physics environment. Continuous refinement loop.' },
    { title: 'Native Multi-Modal Fusion', desc: 'Fuses 1D sequences, 2D Cryo-EM, 3D structures, and 4D dynamics in shared latent space.' },
    { title: 'Physics-Informed ML', desc: 'Learns molecular behavior from data instead of solving quantum equations. Orders of magnitude faster.' },
  ];

  points.forEach((p, i) => {
    const x = 80 + (i % 2) * 580;
    const y = 300 + Math.floor(i / 2) * 170;
    d.roundedRect(x, y, 540, 140, 8).lineWidth(1).strokeColor(COLORS.border).stroke();
    d.fontSize(16).fillColor(COLORS.white).text(p.title, x + 24, y + 24, { width: 490 });
    d.fontSize(12).fillColor(COLORS.muted).text(p.desc, x + 24, y + 56, { width: 490 });
  });
});

// --- SLIDE 4: Architecture ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accent).text('TECHNOLOGY', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('Multi-Modal Fusion Architecture', 80, 100);

  const streams = [
    { label: '1D Sequences / Literature', module: 'LLM Semantic Encoding', color: '#8b5cf6' },
    { label: '2D Cryo-EM Images', module: 'Vision Transformer', color: '#f59e0b' },
    { label: '3D Protein Structures', module: 'CUDA Voxelization', color: '#06b6d4' },
    { label: '4D Temporal Dynamics', module: 'World Model Forecasting', color: '#10b981' },
  ];

  streams.forEach((s, i) => {
    const y = 220 + i * 100;
    d.roundedRect(80, y, 280, 60, 6).fill(COLORS.bgLight);
    d.fontSize(12).fillColor(COLORS.muted).text(s.label, 100, y + 12, { width: 250 });
    d.fontSize(11).fillColor(s.color).text(s.module, 100, y + 34, { width: 250 });
    d.moveTo(360, y + 30).lineTo(480, y + 30).lineWidth(1).strokeColor(COLORS.border).stroke();
  });

  d.roundedRect(500, 280, 260, 180, 8).lineWidth(2).strokeColor(COLORS.accent).stroke();
  d.fontSize(14).fillColor(COLORS.accent).text('Shared Latent Space', 540, 340);
  d.fontSize(11).fillColor(COLORS.muted).text('Cross-Attention Fusion', 540, 370);

  d.moveTo(760, 370).lineTo(880, 370).lineWidth(1).strokeColor(COLORS.border).stroke();

  d.roundedRect(900, 320, 280, 100, 8).lineWidth(2).strokeColor(COLORS.accentGreen).stroke();
  d.fontSize(14).fillColor(COLORS.accentGreen).text('Validated Lead Compound', 930, 355);
  d.fontSize(11).fillColor(COLORS.muted).text('Deterministic Output', 930, 380);
});

// --- SLIDE 5: GPU Compute ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accent).text('INFRASTRUCTURE', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('GPU-Accelerated Computing', 80, 100);
  d.fontSize(15).fillColor(COLORS.muted).text(
    'Designed from the ground up for massively parallel GPU execution.',
    80, 165, { width: 800 }
  );

  const infra = [
    { label: 'Training', value: 'Multi-GPU distributed (H100), mixed-precision BF16, FSDP/DeepSpeed' },
    { label: 'Inference', value: 'TensorRT-optimized, sub-second 4D occupancy prediction' },
    { label: 'Data Pipeline', value: 'Custom CUDA kernels, RAPIDS-accelerated preprocessing' },
    { label: 'Frameworks', value: 'PyTorch, CUDA-X (cuBLAS, cuFFT, cuDNN), Triton inference serving' },
    { label: 'Pretrained Models', value: 'Fine-tuned from Llama/Mistral (LLM), ViT/DINOv2 (Vision)' },
  ];

  infra.forEach((row, i) => {
    const y = 240 + i * 60;
    d.roundedRect(80, y, 1120, 48, 6).fill(COLORS.bgLight);
    d.fontSize(12).fillColor(COLORS.accent).text(row.label, 110, y + 16, { width: 140 });
    d.fontSize(13).fillColor(COLORS.white).text(row.value, 260, y + 16, { width: 900 });
  });

  d.fontSize(11).fillColor(COLORS.muted).text('Estimated Total Compute:', 80, 570);
  d.fontSize(22).fillColor(COLORS.white).text('35,000 – 50,000 H100 GPU-Hours', 80, 595);
  d.fontSize(12).fillColor(COLORS.muted).text('over 24 months', 80, 630);
});

// --- SLIDE 6: Datasets ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accent).text('DATA', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('Clearly Defined Datasets', 80, 100);

  const datasets = [
    { name: 'Protein Data Bank (PDB)', scale: '220K structures', dim: '3D' },
    { name: 'AlphaFold DB', scale: '200M predicted structures', dim: '3D' },
    { name: 'EMDB', scale: '40K Cryo-EM maps', dim: '2D' },
    { name: 'ChEMBL', scale: '2.4M+ bioactive compounds', dim: '1D' },
    { name: 'PubMed / MEDLINE', scale: '36M+ research papers', dim: '1D' },
    { name: 'ZINC Database', scale: '230M+ compounds', dim: '1D' },
    { name: 'MoDEL / mdCATH', scale: 'Curated MD trajectories', dim: '4D' },
    { name: 'EMPIAR', scale: 'Raw EM image archives', dim: '2D' },
  ];

  datasets.forEach((ds, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 80 + col * 580;
    const y = 200 + row * 110;
    d.roundedRect(x, y, 540, 85, 6).lineWidth(1).strokeColor(COLORS.border).stroke();
    d.fontSize(11).fillColor(COLORS.accent).text(ds.dim, x + 20, y + 20);
    d.fontSize(15).fillColor(COLORS.white).text(ds.name, x + 60, y + 18, { width: 460 });
    d.fontSize(12).fillColor(COLORS.muted).text(ds.scale, x + 60, y + 46, { width: 460 });
  });
});

// --- SLIDE 7: Timeline ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accent).text('TIMELINE', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('Project Milestones', 80, 100);

  const phases = [
    { phase: 'Phase 1', time: 'Month 1–6', title: 'Foundation', desc: 'Data pipeline, World Model v1, LLM fine-tuning', gpu: '~12K GPU-hrs', milestone: 'PoC on known protein-ligand pairs' },
    { phase: 'Phase 2', time: 'Month 7–12', title: 'Integration', desc: 'ViT adaptation, fusion layer, bi-directional loop', gpu: '~15K GPU-hrs', milestone: 'End-to-end pipeline on benchmarks' },
    { phase: 'Phase 3', time: 'Month 13–18', title: 'Validation', desc: 'Large-scale training, inference optimization', gpu: '~15K GPU-hrs', milestone: 'Publication-ready results, first pilot' },
    { phase: 'Phase 4', time: 'Month 19–24', title: 'Production', desc: 'SaaS deployment, customer engagements', gpu: '~8K GPU-hrs', milestone: 'Revenue-generating platform' },
  ];

  phases.forEach((p, i) => {
    const y = 210 + i * 115;
    d.roundedRect(80, y, 1120, 95, 8).lineWidth(1).strokeColor(COLORS.border).stroke();
    d.fontSize(10).fillColor(COLORS.accent).text(p.phase, 110, y + 15);
    d.fontSize(10).fillColor(COLORS.muted).text(p.time, 110, y + 35);
    d.fontSize(18).fillColor(COLORS.white).text(p.title, 260, y + 15, { width: 250 });
    d.fontSize(12).fillColor(COLORS.muted).text(p.desc, 260, y + 45, { width: 400 });
    d.fontSize(11).fillColor(COLORS.accentGreen).text(p.milestone, 700, y + 20, { width: 400 });
    d.fontSize(11).fillColor(COLORS.muted).text(p.gpu, 700, y + 50, { width: 200 });
  });
});

// --- SLIDE 8: Business Model ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accent).text('BUSINESS MODEL', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('Path to Revenue', 80, 100);

  const phases = [
    { title: 'Year 1–2: Compute SaaS', desc: 'High-precision 4D dynamic virtual screening as a service for top pharma and research institutions. Subscription + per-computation pricing.', pct: '40%' },
    { title: 'Year 2–4: Joint Pipelines', desc: 'Co-develop lead compounds with wet-lab partners. Shared IP, milestone payments, and downstream royalties.', pct: '35%' },
    { title: 'Year 4+: Platform Licensing', desc: 'License VoxelTox as the industry-standard spatial prediction engine. Platform licensing + API access fees.', pct: '25%' },
  ];

  phases.forEach((p, i) => {
    const y = 220 + i * 150;
    d.roundedRect(80, y, 1120, 120, 8).lineWidth(1).strokeColor(COLORS.border).stroke();
    d.fontSize(18).fillColor(COLORS.white).text(p.title, 120, y + 20, { width: 500 });
    d.fontSize(13).fillColor(COLORS.muted).text(p.desc, 120, y + 55, { width: 900 });
  });
});

// --- SLIDE 9: Competitive Landscape ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accent).text('COMPETITION', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('Competitive Landscape', 80, 100);

  const headers = ['Competitor', 'Approach', 'Key Limitation'];
  const rows = [
    ['AlphaFold / DeepMind', 'Static structure prediction', 'No dynamics, no binding kinetics'],
    ['Schrodinger', 'Physics-based MD', 'Too slow to scale'],
    ['Recursion Pharma', 'High-throughput wet lab', 'No spatial prediction'],
    ['Insilico Medicine', 'Generative chemistry', 'No 4D physics validation'],
    ['Relay Therapeutics', 'MD + ML hybrid', 'Still equation-dependent'],
  ];

  headers.forEach((h, i) => {
    const x = 80 + i * 380;
    d.fontSize(11).fillColor(COLORS.accent).text(h, x, 200);
  });

  d.moveTo(80, 225).lineTo(1200, 225).lineWidth(0.5).strokeColor(COLORS.border).stroke();

  rows.forEach((row, ri) => {
    const y = 245 + ri * 50;
    row.forEach((cell, ci) => {
      const x = 80 + ci * 380;
      d.fontSize(13).fillColor(ci === 0 ? COLORS.white : COLORS.muted).text(cell, x, y, { width: 360 });
    });
  });

  d.roundedRect(80, 530, 1120, 100, 8).lineWidth(1).strokeColor(COLORS.accentGreen).stroke();
  d.fontSize(16).fillColor(COLORS.accentGreen).text('VoxelTox Unique Position', 120, 555);
  d.fontSize(12).fillColor(COLORS.muted).text(
    'Only platform combining LLM + World Model  |  Native 1D/2D/3D/4D fusion  |  GPU-native architecture  |  Open-source commitment',
    120, 585, { width: 1000 }
  );
});

// --- SLIDE 10: Fundraising ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accent).text('FUNDRAISING', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('Seed Round: $3M–$5M', 80, 100);

  const alloc = [
    { label: 'GPU Compute Infrastructure', pct: '40%', desc: 'Cloud GPU hours (H100 clusters), training infrastructure' },
    { label: 'R&D Team', pct: '30%', desc: 'ML engineers, computational biologists, CUDA developers' },
    { label: 'Data & Partnerships', pct: '20%', desc: 'Dataset licensing, pharma collaborations' },
    { label: 'Operations & Legal', pct: '10%', desc: 'IP protection, corporate structure' },
  ];

  alloc.forEach((a, i) => {
    const y = 220 + i * 80;
    d.roundedRect(80, y, 700, 60, 6).fill(COLORS.bgLight);
    d.fontSize(22).fillColor(COLORS.accent).text(a.pct, 110, y + 15, { width: 60 });
    d.fontSize(14).fillColor(COLORS.white).text(a.label, 190, y + 10, { width: 400 });
    d.fontSize(11).fillColor(COLORS.muted).text(a.desc, 190, y + 34, { width: 500 });
  });

  d.fontSize(14).fillColor(COLORS.white).text('Beyond Capital:', 860, 220);
  const seeks = [
    'GPU/compute asset access',
    'Cloud ecosystem integration',
    'Pharma R&D introductions',
    'Scientific advisory connections',
  ];
  seeks.forEach((s, i) => {
    d.fontSize(12).fillColor(COLORS.muted).text('•  ' + s, 860, 260 + i * 32, { width: 350 });
  });
});

// --- SLIDE 11: Social Impact & Open Source ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accentGreen).text('IMPACT', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('Social Impact & Open Source', 80, 100);

  const impacts = [
    'Accelerating drug discovery reduces time-to-market for life-saving treatments',
    'Reducing clinical trial failure rates lowers healthcare costs globally',
    'Open-source CUDA kernels advance scientific computing for all researchers',
    'Democratizing 4D molecular prediction for academic labs worldwide',
    'Applicable to neglected tropical diseases and rare disease targets',
  ];

  impacts.forEach((item, i) => {
    const y = 220 + i * 55;
    d.fontSize(14).fillColor(COLORS.white).text('•', 100, y);
    d.fontSize(14).fillColor(COLORS.muted).text(item, 130, y, { width: 1000 });
  });

  d.roundedRect(80, 520, 1120, 120, 8).lineWidth(1).strokeColor(COLORS.accentGreen).stroke();
  d.fontSize(14).fillColor(COLORS.accentGreen).text('Open-Source Commitment', 120, 545);
  d.fontSize(12).fillColor(COLORS.muted).text(
    '• Core voxelization CUDA kernels\n• Benchmark datasets for 4D molecular occupancy prediction\n• Pretrained model checkpoints for academic research\n• Papers targeting NeurIPS, ICML, ICLR',
    120, 575, { width: 900 }
  );
});

// --- SLIDE 12: Team & Contact ---
addSlide((d) => {
  d.fontSize(11).fillColor(COLORS.accent).text('TEAM', 80, 60);
  d.fontSize(40).fillColor(COLORS.white).text('Team & Contact', 80, 100);

  d.roundedRect(80, 220, 500, 180, 8).lineWidth(1).strokeColor(COLORS.border).stroke();
  d.fontSize(22).fillColor(COLORS.white).text('Tensor', 120, 250);
  d.fontSize(13).fillColor(COLORS.accent).text('Founder & CEO', 120, 285);
  d.fontSize(12).fillColor(COLORS.muted).text(
    'Multi-modal sensor fusion & spatial computing\nWorld Models, LLM systems, CUDA development\nAutonomous driving perception → molecular space',
    120, 320, { width: 440 }
  );

  d.fontSize(13).fillColor(COLORS.muted).text('Actively hiring:', 680, 250);
  d.fontSize(12).fillColor(COLORS.white).text('• ML Engineers\n• Computational Biologists\n• CUDA / Systems Architects', 680, 280, { width: 400 });

  d.moveTo(80, 480).lineTo(1200, 480).lineWidth(0.5).strokeColor(COLORS.border).stroke();

  d.fontSize(16).fillColor(COLORS.white).text('Contact', 80, 520);
  d.fontSize(14).fillColor(COLORS.muted).text('Email:     tzhang@voxeltox.space', 80, 560);
  d.fontSize(14).fillColor(COLORS.muted).text('Web:       voxeltox.space', 80, 590);

  d.fontSize(11).fillColor('#52525b').text('CONFIDENTIAL — DO NOT DISTRIBUTE', 80, 680);
  d.fontSize(11).fillColor('#52525b').text('© 2026 VoxelTox AI (沃森生科)', 900, 680);
});

doc.end();
console.log('Pitch deck generated: ' + output);
