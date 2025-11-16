---
sidebar_position: 1
title: Fund a market
---

# How to: Fund a market

Providing liquidity to a market earns you a share of the **trading fees** it generates and helps other traders get better prices. Funding can be added **at any time**—even after trading has started. Trading on the market begins automatically once the **minimum funding threshold** set by the market creator is reached.

## Before you start

- Make sure your wallet is **connected** to Ignite Market on the **Flare** network.
- Your wallet must hold the market's **collateral token** (e.g. **USDT0**, **FXRP**).
- Keep a small amount of **FLR** to cover the gas fees.
- If this is your **first** time interacting with the collateral token, your wallet will prompt you to **increase allowance** so the protocol can spend the token on your behalf. This is a one-time approval.

:::info Withdrawal timing
Added liquidity **cannot be withdrawn until the market is resolved**. Once the outcome is finalized, you will be able to redeem your pool share (plus earned fees) via the **Withdraw** button.
:::

:::info Trading threshold
A new market starts in *Funding* mode. As soon as total liquidity meets the creator-defined threshold, the **Buy** and **Sell** tabs become available and regular trading begins. You can still add more funding after this point.
:::

## Step-by-step

1. **Open a market** you want to support.
2. In the order panel, select the **Fund** tab (visible both before and after trading has started).
3. **Enter the amount** of collateral you want to contribute, or click **Max** to use your full balance.
4. Click **Fund**. A two-step modal will appear:
   1. **Increase allowance** – sign an approval transaction (only once per token).
   2. **Confirm transaction** – sign the funding transaction.
5. Wait a few seconds for the block to confirm. A **Congratulations!** dialog with confetti will pop up once the contribution is successful.
6. Your **pool share** now shows up under the chart, and your wallet balance is updated.

:::tip Withdrawing liquidity
Liquidity providers can withdraw their share (plus earned fees) **after the market resolves**.
:::

## Market Funding Risk Warning

By funding market, you are acting as a **liquidity provider** and are taking on part of the market's risk. Your potential loss is directly related to the market's initial uncertainty and the final outcome.

### Understanding Your Risk Exposure

| Scenario | Risk Explanation | Potential Outcome |
| :--- | :--- | :--- |
| **High Uncertainty (50/50 Start)** | If the market begins with a 50/50 probability (maximum uncertainty), you are covering a significant portion of the initial risk. | When the market resolves, **50% of your provided funding can be lost**. |
| **Low Uncertainty (Near Final Outcome)** | If you fund the market when it is close to the final outcome (i.e., the price is already resolved or clearly directional). | All the funding (collateral) can be **retrieved back** (plus any accrued fees) once the market resolves. |

<div style={{ position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', width: '100%', aspectRatio: '1.8216318785578747', padding: '40px 0' }}>
  <iframe src="https://app.supademo.com/embed/cmcujdiph24kz9st8766q1yuq?embed_v=2" loading="lazy" title="Ignite Market ‑ Fund a Market" allow="clipboard-write" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
  </iframe>
</div>


## Funding example

### Setup and Initial Deposit

| Detail | Value |
| :--- | :--- |
| **Market** | "Will Team X win the final?" |
| **Outcomes** | YES / NO |
| **Collateral** | USD0T |
| **Initial Deposit** | **100 USD0T** |
| **Starting Odds** | 50% YES / 50% NO |
| **Initial Position** | Balanced (Roughly holding equal value of YES and NO tokens) |
| **LP Share** | "You own 100% of this pool" |
| **Trading Fee** | 2% per trade |


### Phase 1 – Earning Trading Fees

Traders interact with the pool by buying and selling YES and NO tokens, and each trade incurs a **2% fee** which is deposited into the liquidity pool (LP).
50% of the fees is provided to LP funders.

* **Total Trading Volume:** 500 USD0T
* **Total Fees Collected:** $500 x 0.02/2 = 5 USDT0

### Phase 2 – Pool Position Skew (Impermanent Loss Risk)

As traders bet (in this case, buying YES), the AMM automatically adjusts the pool's composition to maintain the balance of the market. This shift exposes the Liquidity Provider (LP) to the less popular side of the bet.

| Metric | Before Trading | After Trading (Example) | Implication for LP |
| :--- | :--- | :--- | :--- |
| **YES Price** | 50% | **70%** (Up) | Traders are heavily exposed to YES |
| **NO Price** | 50% | **30%** (Down) | Traders are heavily exposed to NO |
| **LP Pool Position** | Balanced | **More exposed to NO** | The LP is effectively shorting the popular outcome (YES). |

**Note:** The LP, by acting as "the pool," is effectively taking on the opposite side of the bet from the aggregated traders. This exposure is the source of potential profit or loss at resolution, known as **Impermanent Loss** risk.

### Phase 3 – Resolution and Final Outcome

The final profit or loss for the LP is determined by two factors:
1.  The total **Trading Fees** collected (5 USD0T).
2.  The value change of the pool's asset composition (YES/NO tokens) based on the **Final Outcome**.


## Example scenarions


### Scenario A: ✅ The Market Was Right (YES Wins)
In this scenario, the market's final odds were **70% YES / 30% NO**, and **YES wins** (the popular outcome).

* **Pool Exposure:** Holding the losing side (NO).
* **Payout:** The pool must pay out to YES token holders.
* **Final Amount (with fees):** **120 USD0T**
* **LP Profit:** $120 - $50 = $70

**Analysis:**

* The LP's loss from holding the losing tokens (NO) was relatively small because the market's price was generally accurate (70% YES).
* Profit came from the high colected fees, and yes position **20 USD0T in collected fees** plus the benefit of the pool's composition being reasonably valued before resolution.
* **Outcome:** Risk taken + Fees earned + Low skew against reality = **Profit**.

### Scenario B: ❌ The Market Was Very Wrong (YES Wins, but NO was favored)

Imagine the final odds were skewed to **80% NO / 20% YES**, and **YES wins** (a major surprise).

* **Pool Exposure:** Extremely exposed to the losing side (NO). The pool was effectively **short YES**.
* **Payout:** The pool must pay out to all YES token holders (payout is 1 USD0T per token).
* **Final Amount (with fees):** **60 USD0T**
* **LP Loss:** $60 - $80 = -$20

**Analysis:**

* The pool was heavily skewed towards **NO** (80% favored), meaning the LP was holding a large amount of tokens that went to **zero** when YES won.
* The major loss from the pool's bad positioning (80 USD0T) was significantly larger than the **10 USD0T in collected fees**.
* **Outcome:** High risk taken + Fees earned - High skew against reality = **Significant Loss**.