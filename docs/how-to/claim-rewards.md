---
sidebar_position: 3
title: Claim rewards
---

# How to: Claim rewards

Once a market has **resolved** and the winning outcome is set, holders of the winning shares can redeem their payout in a few clicks. All unclaimed winnings remain in the market contract until they are withdrawn.

## Before you start

- Make sure your wallet is **connected** to Ignite Market and set to the **Flare** network.
- You must hold **positive P/L** (winning shares) in at least one resolved market. If you sold or transferred your position before resolution, there is nothing to claim.
- Keep a small amount of **FLR** in your wallet to cover gas fees.

:::info You can claim later
Unclaimed winnings do **not** expire. If gas is expensive, you can wait and claim when network fees drop.
:::

## Step-by-step

1. **Open a resolved market** where you hold the winning outcome. The status badge at the top left shows **Closed** and the outcome card displays "Outcome winner".
2. In the outcome card, click **Claim**. The button is only enabled if you are eligible.
3. A **Claim winnings** modal appears showing the outcome logo and the amount you will receive.
4. **Confirm transaction** in your wallet. This sends a single on-chain call to withdraw your payout.
5. Wait a few seconds for the block to confirm. A **Congratulations!** dialog will appear once the claim is successful.
6. Your wallet balance updates and the **Claim** button turns into a **✓ Claimed** label.


<div style={{ position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', width: '100%', aspectRatio: '1.8216318785578747', padding: '40px 0' }}>
  <!-- Replace the Supademo URL below once the walkthrough is recorded -->
  <iframe src="https://app.supademo.com/embed/cmcufs5do1zsc9st8q2w86ngw?embed_v=2" loading="lazy" title="Ignite Market ‑ Claim Rewards" allow="clipboard-write" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
  </iframe>
</div>

