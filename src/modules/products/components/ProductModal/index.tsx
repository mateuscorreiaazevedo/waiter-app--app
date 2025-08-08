import { Modal, View } from 'react-native';
import type { Product } from '../../models/Product';
import { ProductModalFooter } from './Footer';
import { ProductModalHeader } from './Header';
import { ProductModalImageHero } from './ImageHero';
import { ProductModalIngredientsList } from './IngredientsList';

interface ProductModalProps {
  onClose: VoidFunction;
  product: Product | null;
}

export function ProductModal({ onClose, product }: ProductModalProps) {
  if (!product) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      onRequestClose={onClose}
      presentationStyle="pageSheet"
      visible={!!product}
    >
      <ProductModalImageHero imagePath={product.imagePath} onClose={onClose} />
      <View className="flex-1 gap-8 bg-gray100 px-6 pt-8">
        <ProductModalHeader
          description={product.description}
          name={product.name}
        />
        <ProductModalIngredientsList ingredients={product.ingredients} />
      </View>
      <ProductModalFooter
        onAddToCart={() => alert('Adicionado ao pedido')}
        price={product.price}
      />
    </Modal>
  );
}
