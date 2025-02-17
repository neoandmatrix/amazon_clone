-- CreateTable
CREATE TABLE "USER" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CART" (
    "id" SERIAL NOT NULL,
    "useId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "CART_PRODUCT" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "cartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PRODUCT" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageLink" TEXT DEFAULT 'www.google.com',
    "brandName" TEXT NOT NULL,
    "wishListId" INTEGER,
    "brandId" INTEGER NOT NULL,
    "orderItemId" INTEGER,

    CONSTRAINT "PRODUCT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CATEGORIES" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CATEGORIES_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BRANDS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logoLink" TEXT NOT NULL DEFAULT 'null'
);

-- CreateTable
CREATE TABLE "ORDERS" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "total" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ORDER_PRODUCT" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "WISHLIST" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "REVIEWS" (
    "id" SERIAL NOT NULL,
    "reviewText" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ADDRESS" (
    "id" SERIAL NOT NULL,
    "addressText" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CATEGORIESToPRODUCT" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "USER_id_key" ON "USER"("id");

-- CreateIndex
CREATE UNIQUE INDEX "USER_email_key" ON "USER"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CART_id_key" ON "CART"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CART_useId_key" ON "CART"("useId");

-- CreateIndex
CREATE UNIQUE INDEX "CART_PRODUCT_id_key" ON "CART_PRODUCT"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CATEGORIES_name_key" ON "CATEGORIES"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BRANDS_id_key" ON "BRANDS"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BRANDS_name_key" ON "BRANDS"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ORDERS_id_key" ON "ORDERS"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ORDER_PRODUCT_id_key" ON "ORDER_PRODUCT"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WISHLIST_id_key" ON "WISHLIST"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WISHLIST_userId_key" ON "WISHLIST"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "REVIEWS_id_key" ON "REVIEWS"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ADDRESS_id_key" ON "ADDRESS"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_CATEGORIESToPRODUCT_AB_unique" ON "_CATEGORIESToPRODUCT"("A", "B");

-- CreateIndex
CREATE INDEX "_CATEGORIESToPRODUCT_B_index" ON "_CATEGORIESToPRODUCT"("B");

-- AddForeignKey
ALTER TABLE "CART" ADD CONSTRAINT "CART_useId_fkey" FOREIGN KEY ("useId") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CART_PRODUCT" ADD CONSTRAINT "CART_PRODUCT_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "CART"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CART_PRODUCT" ADD CONSTRAINT "CART_PRODUCT_productId_fkey" FOREIGN KEY ("productId") REFERENCES "PRODUCT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PRODUCT" ADD CONSTRAINT "PRODUCT_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "WISHLIST"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PRODUCT" ADD CONSTRAINT "PRODUCT_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "BRANDS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PRODUCT" ADD CONSTRAINT "PRODUCT_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "ORDER_PRODUCT"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ORDER_PRODUCT" ADD CONSTRAINT "ORDER_PRODUCT_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ORDERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WISHLIST" ADD CONSTRAINT "WISHLIST_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "REVIEWS" ADD CONSTRAINT "REVIEWS_productId_fkey" FOREIGN KEY ("productId") REFERENCES "PRODUCT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "REVIEWS" ADD CONSTRAINT "REVIEWS_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ADDRESS" ADD CONSTRAINT "ADDRESS_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CATEGORIESToPRODUCT" ADD CONSTRAINT "_CATEGORIESToPRODUCT_A_fkey" FOREIGN KEY ("A") REFERENCES "CATEGORIES"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CATEGORIESToPRODUCT" ADD CONSTRAINT "_CATEGORIESToPRODUCT_B_fkey" FOREIGN KEY ("B") REFERENCES "PRODUCT"("id") ON DELETE CASCADE ON UPDATE CASCADE;
