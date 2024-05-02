from mkdocs.plugins import BasePlugin
from mkdocs.config import config_options
from mkdocs.exceptions import PluginError

class CustomSearchPlugin(BasePlugin):
    config_scheme = (
        ('gpt_engine_api_url', config_options.Type(str)),
        ('openai_api_key', config_options.Type(str)),
    )

    def __init__(self):
        super().__init__()
        self.gpt_engine_api_url = None
        self.gpt_engine_api_key = None

    def on_config(self, config, **kwargs):
        # Get configuration values from mkdocs.yml
        self.gpt_engine_api_url = self.config.get('gpt_engine_api_url')
        self.gpt_engine_api_key = self.config.get('gpt_engine_api_key')

        if not self.gpt_engine_api_url or not self.gpt_engine_api_key:
            raise PluginError('You must provide both gpt_engine_api_url and gpt_engine_api_key in mkdocs.yml')

        return config

    def on_pre_template(self, template, template_name, context, **kwargs):
        # Add GPT Engine API details to the context
        context['gpt_engine_api_url'] = self.gpt_engine_api_url
        context['gpt_engine_api_key'] = self.gpt_engine_api_key

        return template, context
