import { FormSection } from "@/components/forms/FormSection"
import { getDefaultSettingsState, useSettings } from "@/controllers/settings"
import { ComputeProvider } from "@/types"

import { FormSelect } from "../forms/FormSelect"
import { availableComputeProvidersForMusic } from "./constants"
import { FormInput } from "../forms/FormInput"

export function SettingsSectionMusic() {
  const defaultSettings = getDefaultSettingsState()
  
  const musicProvider = useSettings(s => s.musicProvider)
  const setMusicProvider = useSettings(s => s.setMusicProvider)

  const huggingFaceModelForMusic = useSettings(s => s.huggingFaceModelForMusic)
  const setHuggingFaceModelForMusic = useSettings(s => s.setHuggingFaceModelForMusic)

  const replicateModelForMusic = useSettings(s => s.replicateModelForMusic)
  const setReplicateModelForMusic = useSettings(s => s.setReplicateModelForMusic)

  const falAiModelForMusic = useSettings(s => s.falAiModelForMusic)
  const setFalAiModelForMusic = useSettings(s => s.setFalAiModelForMusic)

  const modelsLabModelForMusic = useSettings(s => s.modelsLabModelForMusic)
  const setModelsLabModelForMusic = useSettings(s => s.setModelsLabModelForMusic)

  const comfyWorkflowForMusic = useSettings(s => s.comfyWorkflowForMusic)
  const setComfyWorkflowForMusic = useSettings(s => s.setComfyWorkflowForMusic)

  return (
    <div className="flex flex-col space-y-6 justify-between">
      <FormSection label="Music rendering">

        <FormSelect<ComputeProvider>
          label="Music provider"
          selectedItemId={musicProvider}
          selectedItemLabel={
            (availableComputeProvidersForMusic as any)[musicProvider]
            || ComputeProvider.NONE
          }
          items={Object.entries(availableComputeProvidersForMusic).map(([provider, label]) => ({
            id: provider,
            label,
            disabled: false,
            value: provider as ComputeProvider,
          }))}
          onSelect={setMusicProvider}
          horizontal
        />
     {musicProvider.startsWith("COMFY_")
         ? <FormInput
          label="Default Comfy workflow template for music"
          value={comfyWorkflowForMusic}
          defaultValue={defaultSettings.comfyWorkflowForMusic}
          onChange={setComfyWorkflowForMusic}
        />
        : // "proprietary" parameters
          <>
            {musicProvider === ComputeProvider.HUGGINGFACE && <FormInput
              label="HF Model ID (must be compatible with the Inference API)"
              value={huggingFaceModelForMusic}
              defaultValue={defaultSettings.huggingFaceModelForMusic}
              onChange={setHuggingFaceModelForMusic}
            />}
            {musicProvider === ComputeProvider.REPLICATE && <FormInput
              label="Replicate.com model ID"
              value={replicateModelForMusic}
              defaultValue={defaultSettings.replicateModelForMusic}
              onChange={setReplicateModelForMusic}
            />}
            {musicProvider === ComputeProvider.FALAI && <FormInput
              label="Fal.ai model ID"
              value={falAiModelForMusic}
              defaultValue={defaultSettings.falAiModelForMusic}
              onChange={setFalAiModelForMusic}
            />}
            {musicProvider === ComputeProvider.MODELSLAB && <FormInput
              label="ModelsLab.com model ID"
              value={modelsLabModelForMusic}
              defaultValue={defaultSettings.modelsLabModelForMusic}
              onChange={setModelsLabModelForMusic}
            />}
          </>}
      </FormSection>
    </div>
  )
}