# VoxelTox AI (沃森生科) — Business Plan 2026

> **CONFIDENTIAL** — Do Not Distribute

---

## 1. Executive Summary

| | |
|---|---|
| **Company** | VoxelTox AI (沃森生科) |
| **Domain** | voxeltox.space |
| **Stage** | Seed |
| **Fundraising** | $3M–$5M |
| **Target Investors** | Compute infrastructure, cloud ecosystems, strategic capital |

**Vision:** Lead the "Panoramic Spatial Intelligence" revolution in the microscopic world — transforming drug discovery from static probability screening into 4D dynamic deterministic prediction.

**Core Product:** VoxelTox Platform — the world's first microscopic multi-modal fusion perception and dynamic prediction platform for drug discovery.

**Technical Moat:** Fusion of Large Language Models (LLM) for sequential logic understanding with World Models for 4D Spatial-Temporal Occupancy Forecasting — built entirely on GPU-accelerated computing and physics-informed machine learning.

### Key Metrics

| Metric | Value |
|--------|-------|
| Speed vs. Traditional MD | 10,000× faster |
| Data Dimensionality | Native 1D/2D/3D/4D fusion |
| Output Quality | Deterministic (vs. probabilistic) |
| Addressable Market (2030) | $70B+ |

---

## 2. Market Pain Points & Opportunity

### 2.1 The Static Prediction Limitation

Current AI-driven drug discovery (AIDD) overwhelmingly relies on static structural predictions (e.g., AlphaFold). However, in real physiological environments, protein-molecule binding is:

- **Dynamic** — continuously changing conformation
- **Temporal** — evolving over microsecond-to-millisecond timescales
- **Spatially complex** — full of steric changes and induced fit

Static snapshots fundamentally cannot capture this reality.

### 2.2 The Computational Efficiency Bottleneck

Traditional Molecular Dynamics (MD) simulation relies on expensive physics equation solving. This approach is:

- Computationally prohibitive (days to weeks for microsecond-scale dynamics)
- Impossible to scale to large-scale virtual screening
- Limited to small molecular systems

### 2.3 The Data Silo Problem

Biological data spans extreme dimensional ranges:

| Dimension | Data Type | Examples |
|-----------|-----------|----------|
| 1D | Text sequences | FASTA, SMILES, PubMed literature |
| 2D | Microscopy images | Cryo-EM micrographs, density maps |
| 3D | Spatial structures | Protein point clouds, crystal structures |
| 4D | Temporal dynamics | Conformational trajectories, binding kinetics |

The industry lacks a unified architecture for fusing these modalities.

### 2.4 Market Size

- Global AI in Drug Discovery: **$3.9B (2024) → $70B+ (2030)**
- CAGR: ~45%
- Average cost to bring one drug to market: **$2.6B**
- Clinical trial failure rate: **>90%**

---

## 3. Core Technology & Architecture

### 3.0 GPU-Accelerated Computing Foundation

The entire VoxelTox pipeline is designed for GPU-accelerated infrastructure:

| Component | GPU Technology |
|-----------|---------------|
| Training | Multi-GPU distributed (H100/A100), mixed-precision (BF16), FSDP/DeepSpeed |
| Inference | TensorRT-optimized, sub-second 4D occupancy prediction |
| Data Pipeline | Custom CUDA kernels for voxelization, cuDNN, RAPIDS preprocessing |
| Frameworks | PyTorch, CUDA-X (cuBLAS, cuFFT, cuDNN), Triton inference serving |

**Estimated Compute Requirements:**
- World Model training: ~20,000 H100 GPU-hours per cycle
- LLM fine-tuning: ~5,000 H100 GPU-hours
- Vision Transformer training: ~8,000 H100 GPU-hours
- Production inference: 4× A100/H100 for real-time prediction

### 3.1 Architecture Overview

```
[1D Sequences/Literature]  ──→  (LLM Semantic Encoding)       ────┐
                                                                    │
[2D Cryo-EM Images]        ──→  (Vision Transformer)           ────┤
                                                                    ├──→ [Shared Latent Space]
[3D Protein Structures]    ──→  (CUDA Voxelization)            ────┤         │
                                                                    │         ↓
[4D Temporal Dynamics]     ──→  (World Model Forecasting)      ────┘  [Validated Lead]
```

### 3.2 Module 1: 1D Semantic Reasoning (LLM)

**Implementation:**
- Fine-tuned from pretrained foundation models (Llama/Mistral class)
- Multi-GPU LoRA/QLoRA training on domain-specific biomedical corpora
- INT8/FP8 quantization via TensorRT-LLM for production inference

**Capabilities:**
- Parses FASTA protein sequences and SMILES chemical notation
- Ingests millions of PubMed papers for contextual reasoning
- Proposes candidate molecules based on learned biochemical principles

### 3.3 Module 2: 2D Structural Vision (Vision Transformer)

**Implementation:**
- Pretrained ViT/DINOv2 adapted for electron microscopy domain
- GPU-accelerated fine-tuning on EMDB Cryo-EM dataset
- CUDA-accelerated image preprocessing pipeline

**Capabilities:**
- Processes raw Cryo-EM micrographs and 2D density maps
- Resolves sub-angstrom structural details
- Provides 2D → 3D reconstruction priors

### 3.4 Module 3: 3D/4D World Model

**Implementation:**
- 3D U-Net backbone with temporal attention layers (custom architecture)
- Custom CUDA kernels for real-time point cloud → voxel grid conversion
- Physics-informed loss functions, GPU-accelerated training
- TensorRT-optimized inference for real-time 4D occupancy forecasting

**Capabilities:**
- Converts binding pockets into continuous spatial voxel grids
- Predicts molecular spatial occupancy changes over time
- Validates LLM proposals via spatial collision & energy stability testing

> **Key Insight:** The World Model learns physical behavior from data through physics-informed ML — not by solving quantum equations. Orders of magnitude faster than traditional MD.

### 3.5 Module 4: Cross-Dimensional Fusion

**Implementation:**
- Multi-head cross-attention with learned positional encodings per modality
- Distributed training across multi-GPU clusters

**Capabilities:**
- Aligns 1D/2D/3D/4D representations in shared latent space
- LLM proposes → Vision verifies → World Model validates → loop refines
- Achieves deterministic prediction rather than probabilistic screening

---

## 4. Datasets

VoxelTox leverages clearly defined, publicly available datasets with GPU-accelerated preprocessing:

### Structural Data
| Dataset | Scale | Use |
|---------|-------|-----|
| Protein Data Bank (PDB) | ~220,000 structures | 3D structural training |
| AlphaFold DB | ~200M predicted structures | Pre-training augmentation |
| UniProt | 250M+ proteins | Sequence & functional data |

### Microscopy Data
| Dataset | Scale | Use |
|---------|-------|-----|
| EMDB | ~40,000 Cryo-EM maps | Vision Transformer training |
| EMPIAR | Raw EM archives | Fine-tuning & augmentation |

### Chemical & Pharmacological Data
| Dataset | Scale | Use |
|---------|-------|-----|
| ChEMBL | 2.4M+ compounds | Bioactivity training |
| ZINC | 230M+ compounds | Virtual screening library |
| PubChem | 111M+ structures | Chemical space coverage |

### Literature & Dynamics
| Dataset | Scale | Use |
|---------|-------|-----|
| PubMed/MEDLINE | 36M+ papers | LLM domain fine-tuning |
| MoDEL / mdCATH | Curated MD trajectories | 4D dynamics ground truth |
| D.E. Shaw trajectories | Long-timescale MD | Temporal validation |

All preprocessing uses RAPIDS GPU-accelerated pipelines for efficient distributed training data loading.

---

## 5. Key Technical Differentiators

### 5.1 Bi-directional Self-Correction Loop

```
LLM(propose) → WorldModel(simulate) → feedback → LLM(refine) → ... → converged_lead
```

False positive rates drop by orders of magnitude. Only molecules surviving physics simulation reach the pipeline.

### 5.2 Physics-Informed ML (No Quantum Brute-Force)

| Approach | Speed | Capability |
|----------|-------|------------|
| Traditional MD | Days–Weeks | Microsecond dynamics |
| AlphaFold | Minutes | Static structure only |
| **VoxelTox** | **Seconds–Minutes** | **Full 4D dynamics** |

The World Model predicts WHERE atoms will be — not HOW they got there. Occupancy forecasting replaces trajectory integration.

### 5.3 Architecturally Multi-Modal (1D + 2D + 3D + 4D)

Natively multi-dimensional — no information loss from dimension reduction. Cross-modal correlations captured that are invisible to any single data type.

### 5.4 Open-Source Commitment

- Core voxelization CUDA kernels: planned open-source release
- Benchmark datasets for 4D molecular occupancy prediction
- Pretrained model checkpoints for academic research use
- Technical papers targeting NeurIPS, ICML, ICLR

---

## 6. Project Timeline & Milestones

| Phase | Timeline | Focus | Milestone | Compute |
|-------|----------|-------|-----------|---------|
| Foundation | Month 1–6 | Data pipeline, World Model v1, LLM fine-tuning | PoC on known protein-ligand pairs | ~12,000 GPU-hrs |
| Integration | Month 7–12 | ViT adaptation, fusion layer, bi-directional loop | End-to-end pipeline on benchmarks | ~15,000 GPU-hrs |
| Validation | Month 13–18 | Large-scale training, inference optimization | Publication-ready results, first pilot | ~15,000 GPU-hrs |
| Production | Month 19–24 | Production deployment, SaaS launch | Revenue-generating engagements | ~8,000 GPU-hrs |

**Total estimated compute: ~35,000–50,000 H100 GPU-hours over 24 months**

---

## 7. Business Model

### Phase 1: Compute SaaS Platform (Year 1–2)
- 4D dynamic virtual screening as a service
- Target: Top pharma and research institutions
- Revenue: Subscription + per-computation pricing

### Phase 2: Joint Pipeline Development (Year 2–4)
- Co-develop lead compounds with wet-lab partners
- Revenue: Milestone payments + downstream royalties

### Phase 3: Platform Licensing (Year 4+)
- License as industry-standard spatial prediction engine
- Revenue: Platform licensing + API access

---

## 8. Fundraising

| | |
|---|---|
| **Round** | Seed |
| **Amount** | $3,000,000 – $5,000,000 |

### Use of Funds

| Allocation | % | Purpose |
|------------|---|---------|
| GPU Compute | 40% | Cloud GPU hours (H100 clusters), training infrastructure |
| R&D Team | 30% | ML engineers, computational biologists, CUDA developers |
| Data & Partnerships | 20% | Dataset licensing, pharma collaborations |
| Operations & Legal | 10% | IP protection, corporate structure |

### What We Seek Beyond Capital

- GPU/compute asset access (cloud credits, dedicated clusters)
- Cloud ecosystem integration and go-to-market support
- Introductions to pharma R&D decision-makers
- Scientific advisory connections

---

## 9. Competitive Landscape

| Competitor | Approach | Key Limitation |
|------------|----------|----------------|
| AlphaFold / DeepMind | Static structure prediction | No dynamics, no binding kinetics |
| Schrödinger | Physics-based MD | Too slow to scale |
| Recursion Pharma | High-throughput wet lab | No spatial prediction |
| Insilico Medicine | Generative chemistry | No 4D physics validation |
| Relay Therapeutics | MD + ML hybrid | Still equation-dependent |

**VoxelTox Unique Position:**
- Only platform combining LLM reasoning + World Model physics simulation
- Only platform natively fusing 1D/2D/3D/4D data
- GPU-native architecture — designed for accelerated computing at scale
- Committed to open-source contributions and academic collaboration

---

## 10. Social Impact

- **Healthcare:** Accelerating drug discovery reduces time-to-market for life-saving treatments
- **Cost Reduction:** Reducing clinical trial failure rates lowers healthcare costs globally
- **Open Science:** Open-source contributions advance scientific computing for all researchers
- **Accessibility:** Democratizing 4D molecular prediction for academic labs worldwide
- **Neglected Diseases:** Platform applicable to rare and tropical disease targets

---

## 11. Team

### Tensor — Founder & CEO

Background in multi-modal sensor fusion and spatial computing. Deep expertise in World Models, LLM systems, GPU-accelerated computing, and CUDA development. Vision: Apply autonomous driving perception technology to molecular space.

*Actively hiring: ML Engineers, Computational Biologists, CUDA/Systems Architects*

---

## 12. Contact

| | |
|---|---|
| **Email** | question@voxeltox.space |
| **Website** | https://voxeltox.space |
| **GitHub** | https://github.com/realkris/voxeltox |

---

*© 2026 VoxelTox AI (沃森生科). All rights reserved. CONFIDENTIAL.*
