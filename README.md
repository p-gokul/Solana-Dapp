# Solana Token and NFT Ecosystem

A Solana Dapp touching all the general and edge operations of the NFTs. This project is designed to understand the NFTs in detail, various NFT creation methodologies and their operations. It also includes the operations with the NFT Collections, cNFTs and pNFTs.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)

## Features

- **Spl-Token-2022 Token Operations:**  
  Create Token, Display Token, Mint Token, Transfer Token, Delegate Token, Revoke Delegated Token, Delegation Information, Burn Tokens

- **NFT (Metaplex - Token Metadata) Operations:**  
  Create NFT, Display NFT, Transfer NFT, Burn NFT

- **NFT (Metaplex - Core) Operations:**  
  Create NFT, Display NFT, Transfer NFT, Burn NFT

## Tech Stack

- **Frontend:**  
  Next.js, TypeScript, Zod, Tailwind CSS, Framer Motion, React Modal, Lucide React, Axios

- **Blockchain (TypeScript Libraries):**  
  Solana, Wallet Adapters, Metaplex Core, Metaplex Token-Metadata, Metaplex Umi

## Installation

---

To get started with the "Solana Token and NFT Ecosystem" Dapp, follow the steps below.

You can run the Dapp using either of the following methods:

### A. Using the Public Image

1. **Download and run the public image:**

    ```bash
    docker run -d --name solana-dapp -p 3000:3000 gokulpant/solana-dapp:v3
    ```

### B. Using Docker

1. **Clone the repository:**

    ```bash
    git clone https://github.com/p-gokul/Solana-Dapp.git
    cd Solana-Dapp
    ```

2. **Build the image and run the container:**

    ```bash
    docker compose up -d --build
    ```

### C. Running the Dapp Locally

1. **Clone the repository:**

    ```bash
    git clone https://github.com/p-gokul/Solana-Dapp.git
    cd Solana-Dapp
    ```

2. **Install dependencies:**

    ```bash
    npm install -f
    ```

3. **Build the Project:**

    ```bash
    npm run build
    ```

4. **Start the app:**

    ```bash
    npm run start
    ```

---
