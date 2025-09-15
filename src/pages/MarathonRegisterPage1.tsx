import { Container, Title, Button, Stack } from "@mantine/core";
import { useState } from "react";
import MarathonModal from "../components/MarathonModal";

export default function MarathonPage() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <Container size="lg" py="lg">
      <Stack align="center">
        <Title order={2}>Marathon Register Page 1</Title>
        {/* Button เรียกใช้งาน Modal*/}
        <Button onClick={() => setModalOpened(true)}>Register</Button>
      </Stack>
      {/* แสดง Modal */}
      <MarathonModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      />
    </Container>
  );
}
