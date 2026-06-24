# VoxelTox AI (万境生科) — Business Plan 2026

> **CONFIDENTIAL** — Do Not Distribute

---

## 1. Executive Summary

| | |
|---|---|
| **Company** | VoxelTox AI (万境生科) |
| **Domain** | voxeltox.space |
| **Stage** | Seed |
| **Fundraising** | $3M–$5M |
| **Target Investors** | Compute infrastructure, cloud ecosystems, strategic capital |

**Vision:** Lead the "Panoramic Spatial Intelligence" revolution in the microscopic world — transforming drug discovery from static probability screening into 4D dynamic deterministic prediction.

**Core Product:** VoxelTox Platform — the world's first microscopic multi-modal fusion perception and dynamic prediction platform for drug discovery.

**Technical Moat:** Fusion of Large Language Models (LLM) for sequential logic understanding with World Models for 4D Spatial-Temporal Occupancy Forecasting. We reconstruct the "multi-modal sensor fusion" pipeline for microscopic biological data — the same architectural paradigm that powers autonomous driving, applied to molecules.

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

The industry lacks a unified architecture for fusing these modalities — analogous to how autonomous driving fuses LiDAR, cameras, radar, and HD maps into a single world representation.

### 2.4 Market Size

- Global AI in Drug Discovery: **$3.9B (2024) → $70B+ (2030)**
- CAGR: ~45%
- Average cost to bring one drug to market: **$2.6B**
- Clinical trial failure rate: **>90%**
- Value of reducing failure rate by even 10%: **billions per drug**

---

## 3. Core Technology & Architecture

VoxelTox breaks traditional single-modality limitations by treating drug discovery as a microscopic "panoramic perception and intelligent control" system:

```
[1D Sequences/Literature]  ──→  (LLM Semantic Encoding)      ────┐
                                                                   │
[2D Cryo-EM Images]        ──→  (Vision Transformer)          ────┤
                                                                   ├──→ [Shared Latent Space]
[3D Protein Structures]    ──→  (Spatial Voxelization)         ────┤     (Cross-Attention)
                                                                   │          │
[4D Temporal Dynamics]     ──→  (World Model Forecasting)     ────┘          ↓
                                                                    [Validated Lead Compound]
```

### 3.1 Module 1: 1D Semantic Navigation Brain (LLM)

**Role:** Parse and understand biological macromolecular sequences, compound structures, and global biomedical literature.

- Processes FASTA protein sequences and SMILES chemical notation
- Ingests millions of PubMed papers for contextual reasoning
- Establishes logical-semantic associations between functional targets
- Proposes candidate molecules based on learned biochemical principles
- Serves as the "hypothesis generation" layer

### 3.2 Module 2: 2D Structural Image Understanding (Vision Transformer)

**Role:** Extract spatial features from Cryo-EM microscopy data, bridging 2D observations to 3D structural understanding.

- Processes raw Cryo-EM micrographs and 2D density maps
- Hierarchical spatial feature extraction via Vision Transformers
- Resolves sub-angstrom structural details invisible to sequence-only methods
- Provides 2D → 3D reconstruction priors for the World Model
- Leverages rapidly growing Cryo-EM repositories (EMDB)

### 3.3 Module 3: 3D/4D Spatial-Temporal Micro-Environment (World Model)

**Role:** Voxelize protein binding pockets into continuous spatial grids and predict molecular dynamics without brute-force quantum calculations.

- Converts binding pockets into continuous spatial voxel grids
- Learns from massive structural evolution datasets (PDB, UniProt)
- Predicts molecular spatial occupancy changes over time (3D → 4D)
- Models conformational collapse and induced-fit dynamics
- Validates LLM proposals via spatial collision & energy stability testing

> **Key Insight:** The World Model does NOT solve quantum chemistry equations. Instead, it learns physical behavior from data — developing an "intuition" for molecular dynamics, analogous to how a human expert develops physical intuition through years of observation.

### 3.4 Module 4: Unified Feature Alignment (Sensor Fusion)

**Role:** Cross-attention mechanisms map all four data dimensions into a shared Latent Space, enabling full-spectrum bi-directional reasoning.

- Cross-attention alignment across 1D/2D/3D/4D representations
- Shared latent space enables holistic reasoning impossible for any single modality
- LLM proposes → Vision verifies → World Model validates → loop refines
- Achieves deterministic prediction rather than probabilistic screening

---

## 4. Key Technical Differentiators

### 4.1 Bi-directional Self-Correction Loop

Unlike linear pipelines (generate once → output), VoxelTox implements a closed-loop between reasoning (LLM) and simulation (World Model):

```
LLM(propose) → WorldModel(simulate) → feedback → LLM(refine) → ... → converged_lead
```

1. LLM generates candidates from semantic understanding
2. World Model simulates each candidate in 4D micro-environment
3. Failure signals feed back as structured constraints
4. Loop repeats until physics-grounded stability is confirmed

**Result:** False positive rates drop by orders of magnitude. Only molecules that survive spatial-temporal simulation reach the pipeline.

### 4.2 Learned Physics (No Quantum Brute-Force)

| Approach | Speed | Capability |
|----------|-------|------------|
| Traditional MD | Days–Weeks | Microsecond dynamics |
| AlphaFold | Minutes | Static structure only |
| **VoxelTox** | **Seconds–Minutes** | **Full 4D dynamics** |

The World Model predicts WHERE atoms will be — not HOW they got there. Occupancy forecasting replaces trajectory integration.

### 4.3 Architecturally Multi-Modal (1D + 2D + 3D + 4D)

Most approaches collapse high-dimensional data to fit single-modality models (e.g., reducing 3D structures to 1D fingerprints), losing spatial information irreversibly.

VoxelTox is natively multi-dimensional:
- No dimension reduction → no information loss
- Cross-modal correlations captured that are invisible to any single data type
- Analogous to autonomous driving: cameras + LiDAR + radar > cameras alone

---

## 5. Business Model

### Phase 1: Compute SaaS Platform (Year 1–2)

- High-precision 4D dynamic virtual screening as a service
- Target: Top pharma companies and research institutions
- Objective: Validate technology closed loop with paying customers
- Revenue: Subscription + per-computation pricing

### Phase 2: Joint Pipeline Development (Year 2–4)

- Partner with wet-lab organizations for experimental validation
- Co-develop lead compounds with shared IP
- Revenue: Milestone payments + downstream royalties
- Value: Platform-validated leads have higher clinical success probability

### Phase 3: Platform Licensing (Year 4+)

- License VoxelTox as industry-standard spatial prediction engine
- Global pharma R&D organizations as customers
- Revenue: Platform licensing fees + API access
- Moat: Network effects from accumulated training data

---

## 6. Fundraising

| | |
|---|---|
| **Round** | Seed |
| **Amount** | $3,000,000 – $5,000,000 |
| **Target** | Strategic investors aligned with deep-tech AI + healthcare |

### Use of Funds

| Allocation | % | Purpose |
|------------|---|---------|
| Compute Infrastructure | 40% | GPU clusters, training pipelines |
| R&D Team Expansion | 30% | ML engineers, computational biologists |
| Data & Partnerships | 20% | Dataset acquisition, pharma partnerships |
| Operations & Legal | 10% | IP protection, corporate structure |

### What We Seek Beyond Capital

- GPU/compute asset access (cloud credits, dedicated clusters)
- Cloud ecosystem integration and go-to-market support
- Introductions to pharma R&D decision-makers
- Scientific advisory connections

---

## 7. Competitive Landscape

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
- Only platform with bi-directional self-correction architecture
- Orders of magnitude faster than MD-based approaches

---

## 8. Team

### Tensor — Founder & CEO

Background in multi-modal sensor fusion and spatial computing. Expertise in World Models, LLM systems, and 4D spatial-temporal prediction. Vision: Apply autonomous driving perception technology to molecular space.

*Actively hiring: ML Engineers, Computational Biologists, Systems Architects*

---

## 9. Contact

| | |
|---|---|
| **Email** | question@voxeltox.space |
| **Website** | https://voxeltox.space |
| **GitHub** | https://github.com/realkris/voxeltox |

---

*© 2026 VoxelTox AI. All rights reserved. CONFIDENTIAL.*
