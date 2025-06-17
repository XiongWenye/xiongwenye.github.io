---
title: 'Deep-learning-Cardiac-Cine-MRI-Segmentation'
date: 2025-06-01
permalink: /posts/Deep-learning-Cardiac-Cine-MRI-Segmentation/
tags:
  - Computer Vision
  - AI for Healthcare
---

# Deep Learning for Cardiac Cine MRI Segmentation

**BME1312 Artificial Intelligence in Biomedical Imaging**
ShanghaiTech University
> Members: 熊闻野, 夏博扬, 杨人一, 吴家兴, 杨丰敏

## Overview

*   **Goal:** Segment key cardiac structures – RV, MYO, and LV.
*   **Challenge:** Accurate and robust delineation of these structures, which can vary in shape and appearance.
*   **Approach:** U-Net based deep learning framework.
  1.  Baseline U-Net implementation.
  2.  Impact of removing U-Net skip connections.
  3.  Effect of data augmentation.
  4.  Comparison of Binary Cross-Entropy vs. Soft Dice Loss.
  5.  Improvements with Attention and Hybrid Loss.
*   **Evaluation:** Dice Similarity Coefficient (DSC).

## Task (a): U-Net (Baseline)

<div align="center">
  <img src="result/network.png" alt="Network">
</div>

### Baseline Training Loss and Validation Loss

<div align="center">
  <img src="result/baseline_unet.png" alt="Baseline Loss">
</div>

### Results: Dice Coefficients

| Structure | Mean Dice | Std. Dev. |
| :-------- | :-------- | :-------- |
| LV        | 0.9519    | 0.0086    |
| MYO       | 0.8734    | 0.0161    |
| RV        | 0.8920    | 0.0310    |

### Segmentation Examples

<div align="center">
  <img src="result/for_ppt/baseline_RV.png" alt="Baseline Segmentation Example RV" width="700">
  <em>Baseline Segmentation Example RV</em>
</div>
<br>
<div align="center">
  <img src="result/for_ppt/baseline_MYO.png" alt="Baseline Segmentation Example MYO" width="700">
  <em>Baseline Segmentation Example MYO</em>
</div>
<br>
<div align="center">
  <img src="result/for_ppt/baseline_LV.png" alt="Baseline Segmentation Example LV" width="700">
  <em>Baseline Segmentation Example LV</em>
</div>

### Discussion - Baseline

*    **LV Segmentation**: Achieved the highest mean Dice score. This is often expected as the LV is typically a large, relatively well-defined structure with good contrast against surrounding tissues in many MRI sequences.
*    **RV Segmentation**: Also showed good performance. The RV cavity is usually clearly visible.
*    **MYO Segmentation**: Had the lowest mean Dice score. The myocardium is a thinner, more complex structure surrounding the RV, and its boundaries, especially with the RV cavity (endocardium) and epicardium, can be more challenging to delineate accurately, potentially leading to lower overlap scores.
*    The standard deviations are relatively small, indicating consistent performance across the test slices.

## Task (b): U-Net without Skip Connections

*   **Modification:** No skip connections in the U-Net architecture.
*   **Training:** Same as baseline (BCE Loss, lr=0.01, 50 epochs).
*   **Purpose:** Evaluate the importance of skip connections.

### Training Loss and Validation Loss (No Skip Connections)

<div align="center">
  <img src="result/no_shortcut_unet.png" alt="Loss Curve for Baseline without shortcut" style="width:70%;">
  <em>Training and Validation Loss for Baseline U-Net without skip connections.</em>
</div>

### Results: Dice Coefficients

| Structure | Baseline DSC | No Shortcut DSC |
| :-------- | :----------- | :-------------- |
| LV Mean   | **0.9519**   | 0.9260          |
| MYO Mean  | **0.8734**   | 0.8223          |
| RV Mean   | **0.8920**   | 0.8588          |
| LV std    | 0.0086       | 0.0111          |
| MYO std   | 0.0161       | 0.0168          |
| RV std    | 0.0310       | 0.0296          |

### Discussion - Impact of No Skip Connections

*   **Significant Drop in Performance:** All structures showed a noticeable decrease in DSC.
*   **Reason:** Skip connections provide high-resolution spatial information from the encoder to the decoder, crucial for accurate boundary localization. They also aid gradient flow.
*   **Conclusion:** Skip connections are vital for U-Net's segmentation accuracy in this task.

## Task (c): U-Net with Data Augmentation

*   **Network:** Baseline U-Net architecture.
*   **Augmentations (Training Set Only):**
  *   `RandomHorizontalFlip`
  *   `RandomRotation(15°)`
  *   `RandomAffine(degrees=50, translate=(0.1,0.1), scale=(0.9,1.1), shear=5)`
*   **Implementation:** `SegmentationDataset` ensuring identical transforms for image and mask.
*   **Training:** BCE Loss, lr=0.01, 50 epochs.

### Training Loss and Validation Loss (with Data Augmentation)

<div align="center">
  <img src="result/baseline_unet_data_aug.png" alt="Loss Curve for Baseline with data augmentation" style="width:70%;">
  <em>Training and Validation Loss for Baseline U-Net with Data Augmentation.</em>
</div>

### Results: Dice Coefficients
| Structure | Baseline DSC | Data Aug. DSC |
| :-------- | :----------- | :------------ |
| LV Mean   | **0.9519**   | 0.9276        |
| MYO Mean  | **0.8734**   | 0.8469        |
| RV Mean   | **0.8920**   | 0.8635        |
| LV std    | 0.0086       | 0.0107        |
| MYO std   | 0.0161       | 0.0149        |
| RV std    | 0.0310       | 0.0384        |

### Discussion - Impact of Data Augmentation

*   **DSC Decrease:** The specific augmentation strategy led to slightly lower Dice scores.
*   **Possible Reasons:**
  *   Some augmentations could have distorted anatomical structures, reducing the effectiveness of learning precise boundaries. Maybe the relative location of structures was altered too much.
*  **Conclusion:** The relative location of structures is crucial for segmentation tasks, and the specific augmentations used may not have been beneficial for this dataset. More careful selection or tuning of augmentations is needed.

## Task (d): U-Net with Soft Dice Loss

*   **Network:** Baseline U-Net architecture.
*   **Training Data:** Original Non-Augmented Training Set.
*   **Loss Function:** `SoftDiceLoss`.
*   **Optimizer:** Adam (lr=0.001), ExponentialLR scheduler.
*   **Training:** 50 epochs.

### Training Loss and Validation Loss (With Soft Dice Loss)

<div align="center">
  <img src="result/soft_dice_loss.png" alt="Loss Curve for Baseline with Soft Dice Loss" style="width:70%;">
  <em>Training and Validation Loss for Baseline U-Net with Soft Dice Loss.</em>
</div>

### Results: Dice Coefficients

| Structure | Baseline with BCE Loss | Baseline with Soft Dice Loss |
| :-------- | :--------------------- | :--------------------------- |
| LV Mean   | 0.9519                 | **0.9566**                   |
| MYO Mean  | 0.8734                 | **0.8962**                   |
| RV Mean   | 0.8920                 | **0.8998**                   |
| LV std    | 0.0086                 | 0.0100                       |
| MYO std   | 0.0161                 | 0.0100                       |
| RV std    | 0.0310                 | 0.0371                       |

### Results: Accuracy

| Structure         | Baseline with BCE Loss | Baseline with Soft Dice Loss |
| :---------------- | :--------------------- | :--------------------------- |
| LV Accuracy Mean  | 0.9991                 | **0.9992**                   |
| MYO Accuracy Mean | 0.9977                 | **0.9980**                   |
| RV Accuracy Mean  | 0.9983                 | 0.9983                       |
| LV Accuracy std   | 0.0002                 | 0.0002                       |
| MYO Accuracy std  | 0.0003                 | 0.0002                       |
| RV Accuracy std   | 0.0005                 | 0.0006                       |

### Segmentation Examples (Soft Dice Loss)

<div align="center">
  <img src="result/for_ppt/soft_dice_loss_RV.png" alt="Baseline with Soft Dice Loss Segmentation Example RV" width="700">
  <em>Baseline with Soft Dice Loss Segmentation Example RV</em>
</div>
<br>
<div align="center">
  <img src="result/for_ppt/soft_dice_loss_MYO.png" alt="Baseline with Soft Dice Loss Segmentation Example MYO" width="700">
  <em>Baseline with Soft Dice Loss Segmentation Example MYO</em>
</div>
<br>
<div align="center">
  <img src="result/for_ppt/soft_dice_loss_LV.png" alt="Baseline with Soft Dice Loss Segmentation Example LV" width="700">
  <em>Baseline with Soft Dice Loss Segmentation Example LV</em>
</div>

### Discussion - Soft Dice Loss

*   **Segmentation Accuracy (Dice):** Using Soft Dice Loss resulted in **noticeably better Dice coefficients** for all cardiac structures compared to BCE Loss when trained on the same non-augmented data. The improvement for MYO was particularly significant.
*   **Segmentation Accuracy (Pixel-wise):** Pixel-wise accuracy also showed slight improvements or remained comparable at very high levels.
*   **Conclusion for Task (d):** Changing the training loss from cross-entropy (BCE) to Soft Dice Loss **improved overall segmentation accuracy**, especially when evaluated by the Dice coefficient, which is more sensitive to segmentation overlap.

## Task (e): Improvements

This section explores two main improvements: using an Attention U-Net and employing a Hybrid Loss function.

### Attention U-Net

*   **Advanced UNet (Attention U-Net):**
  *   **Architecture:** Introduced `AttentionBlock` in the decoder's `Up` module.
    *   `AttentionBlock`: Computes attention coefficients by combining features from the decoder (gating signal) and encoder (skip connection), then applies these coefficients to the encoder features. This helps the model focus on relevant spatial regions during upsampling.
  *   **Loss Function:** `BCE Loss`.
  *   **Optimizer:** Adam (lr=0.001), ExponentialLR scheduler.
  *   **Training:** 50 epochs.

#### Attention U-Net Architecture Diagram
<div align="center">
  <img src="result/for_ppt/attention_unet.png" alt="Attention U-Net Architecture" width="700">
  <em>Attention U-Net Architecture</em>
</div>

#### Results: Dice Coefficients (Attention U-Net)
| Structure | Baseline with BCE Loss | Baseline with Soft Dice Loss | Attention U-Net |
| :-------- | :--------------------- | :--------------------------- | :-------------- |
| LV Mean   | 0.9519                 | 0.9566                       | **0.9568**      |
| MYO Mean  | 0.8734                 | 0.8962                       | **0.8963**      |
| RV Mean   | 0.8920                 | 0.8998                       | **0.9029**      |
| LV std    | 0.0086                 | 0.0100                       | 0.0095          |
| MYO std   | 0.0161                 | 0.0100                       | 0.0120          |
| RV std    | 0.0310                 | 0.0371                       | 0.0370          |

#### Segmentation Examples (Attention U-Net)

<div align="center">
  <img src="result/for_ppt/attention_RV.png" alt="Attention U-Net Segmentation Example RV" width="700">
  <em>Attention U-Net Segmentation Example RV</em>
</div>
<br>
<div align="center">
  <img src="result/for_ppt/attention_MYO.png" alt="Attention U-Net Segmentation Example MYO" width="700">
  <em>Attention U-Net Segmentation Example MYO</em>
</div>
<br>
<div align="center">
  <img src="result/for_ppt/attention_LV.png" alt="Attention U-Net Segmentation Example LV" width="700">
  <em>Attention U-Net Segmentation Example LV</em>
</div>

#### Discussion - Attention U-Net

*   The Attention U-Net showed improved Dice scores compared to the baseline U-Net with BCE loss and the one with Soft Dice Loss. RV performance was slightly higher than the baseline with Soft Dice Loss and the BCE baseline.
*   This suggests that the attention mechanism effectively helps the model to focus on more complex structures or finer details, leading to better boundary delineation for certain structures.
*   Accuracy scores are very high across all structures, which is common in segmentation tasks with large background areas. Dice coefficient remains a more informative metric for evaluating overlap.

### HybridLoss

**Motivation:**
To further improve segmentation, especially at boundaries and for complex structures, by combining multiple complementary loss objectives. This aims to leverage the strengths of different loss types for a more holistic optimization.

#### HybridLoss Definition
The HybridLoss adaptively weights four distinct loss components:
1.  **Dice Loss** (Overlap)
2.  **Binary Cross-Entropy (BCE) Loss** (Pixel-wise accuracy)
3.  **Boundary Loss** (Edge definition)
4.  **Hausdorff Distance Loss (Approximation)** (Shape similarity)
*   Features adaptive weighting of these components using learnable uncertainty parameters.

#### Results with HybridLoss (Mean Dice Scores)

| Model                    | LV Dice (SD)      | MYO Dice (SD)     | RV Dice (SD)        |
| :----------------------- | :---------------- | :---------------- | :------------------ |
| **UNet + HybridLoss**    | 0.9504 (0.0276)   | 0.8839 (0.0275)   | **0.9061** (0.0573) |
| _Baseline U-Net_         | _0.9519_          | _0.8734_          | _0.8920_            |
| **AttUNet + HybridLoss** | 0.9507 (0.0235)   | 0.8875 (0.0247)   | 0.9033 (0.0703)     |
| _Attention U-Net_        | _0.9568 (0.0095)_ | _0.8963 (0.0120)_ | _0.9029 (0.0370)_   |

## Overall Performance Summary (Mean Dice Coefficients)

| Model Configuration                 | LV Mean DSC | MYO Mean DSC | RV Mean DSC |
| :---------------------------------- | :---------- | :----------- | :---------- |
| (a) Baseline U-Net (BCE)            | 0.9519      | 0.8734       | 0.8920      |
| (b) U-Net No Shortcut (BCE)         | 0.9260      | 0.8223       | 0.8588      |
| (c) U-Net + Data Aug. (BCE)         | 0.9276      | 0.8469       | 0.8635      |
| (d) U-Net (Soft Dice Loss, No Aug.) | 0.9566      | 0.8962       | 0.8998      |
| (e0) AttUNet (BCE)                  | **0.9568**  | **0.8963**   | 0.9029      |
| (e1) UNet + HybridLoss              | 0.9504      | 0.8839       | **0.9061**  |
| (e2) AttUNet + HybridLoss           | 0.9507      | 0.8875       | 0.9033      |

## Overall Discussion


*   The **AttUNet with BCE** (e0) remains the top performer for LV and MYO segmentation.
*   Models utilizing **UNet + HybridLoss (e1)**, achieved the best RV Dice score.
*   **No Universal Superiority:** HybridLoss, despite its sophisticated multi-component design with adaptive weighting, did not prove to be a universally superior loss function in these experiments.
*   **RV Segmentation Strength:** A consistent observation is the relative strength of HybridLoss (or its components) in improving or maintaining high performance for RV segmentation, even when LV/MYO performance drops.

## Conclusion

*   **Best Overall Performance (Structure-wise):**
  *   **LV & MYO:** AttUNet with BCE (Task e, Attention U-Net part; e0 in summary) shows the highest Dice scores.
  *   **RV:** U-Net with HybridLoss (Task e, HybridLoss part; e1 in summary) achieves the best Dice score.
*   **Complexity vs. Simplicity:** A simpler model (U-Net) with a well-chosen, targeted loss function (Soft Dice Loss) can still be highly effective and may outperform more complex loss formulations on certain structures or metrics.
*   The performance of HybridLoss models suggests that further optimization (e.g., training duration, hyperparameter tuning of the loss components or solver) could potentially lead to even better results.