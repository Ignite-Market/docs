---
sidebar_position: 4
title: Withdraw funding
---

# How to: Withdraw funding

Once a market has **resolved** and the winning outcome is set, liquidity providers can redeem their share of the pool **plus the trading fees earned**. Withdrawing is a single on-chain action that returns the collateral back to your wallet.

## Before you start

- Make sure your wallet is **connected** to Ignite Market and set to the **Flare** network.
- You must have **added funding** to the market earlier; otherwise there is nothing to withdraw.
- The market status must be **Closed** (resolved). Funding **cannot** be removed while a market is still trading.
- Keep a small amount of **FLR** in your wallet to cover gas fees.

## Step-by-step

1. **Open a resolved market** where you provided liquidity. You will see the status badge **Closed** and the outcome card displaying *Outcome winner*.
2. In the outcome card, click **Withdraw Funding**. The button is only enabled if you are entitled to a pool share.
3. A **Withdraw funding** modal appears showing the amount of collateral you will receive back (principal + earned fees).
4. **Confirm transaction** in your wallet. Only **one** on-chain call is needed.
5. Wait a few seconds for the block to confirm. A **Congratulations!** dialog with confFetti will pop up once the withdrawal is successful.
6. Your wallet balance is updated and the **Withdraw Funding** button turns into a **✓ Withdrawn** label.

:::info Don't forget to claim your winnings
Withdrawing liquidity returns your collateral and earned fees, but it does **not** automatically cash out any winning outcome shares you might still hold. After removing funding, head over to the [Claim rewards](./claim-rewards) guide to redeem your payout.
:::

<div style={{ position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', width: '100%', aspectRatio: '1.8216318785578747', padding: '40px 0' }}>
  <iframe src="https://app.supademo.com/embed/cmcvtcqcd0nm79empy95eimmx?embed_v=2" loading="lazy" title="Ignite Market – Withdraw Funding" allow="clipboard-write" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
  </iframe>
</div> 

